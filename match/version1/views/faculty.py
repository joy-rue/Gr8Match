from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from ..models import *
from ..serializers import *
from typing import List
from django.http import JsonResponse
from django.core.serializers import serialize
import json
from django.shortcuts import get_object_or_404
from django.db.models import Prefetch
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated



def get_ra_details(ra_id):
  try:
    ra = RA.objects.get(pk=ra_id)
    print("Working")
    account = ra.account_id
    user = CustomUser.objects.get(pk=account)
    serialized_ra = CustomUserSerializer(user, context={"fields": ["first_name", "last_name", "email", "department"]})
    print(serialized_ra.data)
    return serialized_ra.data
  except RA.DoesNotExist:
    return Response({"RA info": None})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_RAs(request):
    try:
        RAs = RA.objects.select_related('account').all()
        serialized_data = serialize('json', RAs, fields=('account', 'availability'))
        data = json.loads(serialized_data)
        print(json.dumps(data, indent=2))
        RAs_with_accounts = []
        for entry in data:
            account_id = entry['fields']['account']
            availability = entry['fields']['availability']

            account_data = CustomUser.objects.get(id=account_id)
            first_name = account_data.first_name
            last_name = account_data.last_name
            email = account_data.email

            ra_data = {
                'availability': availability,
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
            }

            RAs_with_accounts.append(ra_data)

        return JsonResponse({'RAs': RAs_with_accounts})
    except:
        return Response({'error': 'No Research Assistants in the system'})
    
    
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_project_applications(request, faculty_id):
    print("Pressure")
    pending_ra_projects = RA_Project.objects.filter(
        owner=faculty_id,
        status="Pending"
    ).prefetch_related("project")
    
    print("pending_ra_projects")

    project_data = []
    for ra_project in pending_ra_projects:
        print(ra_project)
        project_details = ProjectSerializer(ra_project.project).data
        ra_details = None
        if ra_project.rA_id:
            ra_details = get_ra_details(ra_project.rA_id)
        print("Working 2")
        project_data.append({
        "project_id": ra_project.project.id,
        "project_details": project_details,
        "ra_details": ra_details
        })
        print(project_data)
    return Response({"Project data":project_data})


@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def accept_application(request, project_id, account_id, faculty_id):
    try:
        ra = RA.objects.get(account_id=account_id)
        ra_id = ra.pk
        ra_project = RA_Project.objects.get(
            rA_id=ra_id,
            project_id=project_id,
            owner=faculty_id
        )
        ra_project.status = "Accepted"
        ra_project.save()

        return Response({"Success":"Research Assistant added to project"}, status=status.HTTP_200_OK)
    except RA_Project.DoesNotExist:
        return Response({"Unsuccessful":"Record does not exist"}, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_faculty_projects(request, owner_id):
    try:
        projects = Projects.objects.filter(owner_id=owner_id)
        serializer = ProjectSerializer(projects, many=True)
        return Response({'projects':serializer.data})
    except Projects.DoesNotExist:
        return Response({'error':'No projects available'})
    

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def request_ra(request, project_id, account_id, owner_id):
    # print(account_id)
    # try:
        # Get the RA and owner associated with the provided IDs
        ra = RA.objects.get(account_id=account_id)
        owner = CustomUser.objects.get(pk=owner_id)

        # Check if the RA already has a record for this project (avoid duplicates)
        existing_project = RA_Project.objects.filter(project_id=project_id, rA_id=ra.pk).exists()
        if existing_project:
            raise ValueError("RA already requested this project.")
            
        # Create a new RA_Project record with requested status and owner information
        new_request = RA_Project.objects.create(
            rA_id=ra.pk,
            project_id=project_id,
            status="Requested",
            owner_id=owner.pk
        )

        return Response({"Success":"Request made for RA"})
    # except RA.DoesNotExist:
    #     # Handle cases where RA or owner not found
    #     return Response({"Error":"Request couldn't be made"})
    # except ValueError as error:
    #     # Handle duplicate request error
    #     return False