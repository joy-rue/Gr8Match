from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from ..serializers import *
from typing import List
from rest_framework import status



# Retireve project data in the database

# @api_view(['GET'])
# def RA_profile(request, ras_id):
#     try:
#         # Retrieve the project from the database based on the ra id
#         ra = RA.objects.get(rA_id=ras_id)

#         # Serialize the project data using the ProjectSerializer
#         serializer = RASerializer(ra)

#         # Return the serialized project data as a JSON response
#         return Response({'RA': serializer.data})

#     except Projects.DoesNotExist:
#         # Handle the case where the project with the given name does not exist
#         return Response({'error': f'RA with id {ras_id} does not exist'}, status=404)
    
@api_view(["GET"])
def get_ra_details(request, ra_id):
  try:
    ra = RA.objects.get(pk=ra_id)
    account = ra.account_id
    user = CustomUser.objects.get(pk=account)
    serialized_ra = CustomUserSerializer(user, context={"fields": ["first_name", "last_name", "email", "department"]}).data
    print(serialized_ra)
    return Response({"RA info": serialized_ra})
  except RA.DoesNotExist:
    return Response({"RA info": None})
    
    
# @api_view(["PUT"])
# def edit_account(request):
#     password = request.data.get("password")
    

@api_view(["GET"])
def get_all_projects(request):
    try:
        projects = Projects.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response({'projects': serializer.data})
    except Projects.DoesNotExist:
        return Response({'error':'No projects available'})


@api_view(["POST"])
def apply_for_project(request, project_id, ra_id,):
    serializer = ProjectApplicationSerializer(data=request.data)
    if serializer.is_valid():
        project = serializer.save(ra_id, project_id)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def get_my_projects(request, user_id):
    ra = RA.objects.filter(account=user_id).first()
    if not ra:
        return None  # Handle case where no RA found for user

    accepted_ra_projects = RA_Project.objects.filter(
        rA=ra, status="Accepted"
    )
    project_details = []

    for ra_project in accepted_ra_projects:
        project = ra_project.project
        project_details.append({
            "id": project.id,
            "title": project.title,
            "start_date": project.start_date,
            "end_date": project.end_date,
            "description": project.description,
            "department": project.department.department_name,  # Access department name
            "owner": project.owner.email,  # Access owner email
        })

    return Response({"Succes":project_details})


@api_view(["PATCH"])
def accept_request(request, ra_id, project_id):
    try:
        ra_project = RA_Project.objects.get(rA_id=ra_id, project_id=project_id)
        ra_project.status = "Accepted"
        ra_project.save()
        
        return Response({"Success":"Now working on project"}, status=status.HTTP_202_ACCEPTED)
    except RA_Project.DoesNotExist:
        return Response({"Error":"Record does not exist"}, status=status.HTTP_404_NOT_FOUND)