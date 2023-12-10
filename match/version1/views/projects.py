import json

from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from typing import List
from ..serializers import *


# Retireve project data in the database

@api_view(['GET'])
def project_detail(request, project_name):
    try:
        # Retrieve the project from the database based on the project name
        project = Projects.objects.filter(title=project_name).first()

        # Serialize the project data using the ProjectSerializer
        serializer = ProjectSerializer(project)

        # Return the serialized project data as a JSON response
        return Response({'project': serializer.data})

    except Projects.DoesNotExist:
        # Handle the case where the project with the given name does not exist
        return Response({'error': f'Project with name {project_name} does not exist'}, status=404)


# @api_view(['POST'])
# def create_project(request):
#     # Extract data from the request (modify as needed based on your actual data structure)
#     data = request.data
#     title = data.get('title')
#     start_date = data.get('start_date')
#     end_date = data.get('end_date')
#     description = data.get('description')

#     # Check if a project with the same title already exists
#     existing_project = Projects.objects.filter(title=title).first()

#     if existing_project:
#         # Handle the case where the project already exists
#         serializer = ProjectSerializer(existing_project)
#         return Response({'error': f'Project with title {title} already exists', 'project': serializer.data}, status=409)
#     else:
#         # Create a new project instance
#         new_project = Projects.objects.create(
#             title=title,
#             start_date=start_date,
#             end_date=end_date,
#             description=description
#             # Add other fields as needed
#         )

#         # Serialize the new project data using the ProjectSerializer
#         serializer = ProjectSerializer(new_project)

#         # Return the serialized project data as a JSON response
#         return Response({'project': serializer.data}, status=201)
#     # Projects.objects.get(project_id =  )

@api_view(["POST"])
def make_match(request):
    try:
        serializer = MatchingSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
        # Use request.data directly for JSON parsing
        # data = request.data

        # Retrieve Django model instances based on primary keys
            project = get_object_or_404(Projects, id=data["project_id"])
            assistants = RA.objects.all()
            faculty = get_object_or_404(Faculty, faculty_id=data["faculty_id"])

            scores = {}

            for assistant in assistants:
                score = 0
                # print(Project_Skills.objects.filter(project=project).count())
                print(Project_Skills.objects.filter(project=project).count(),"ohg\n")
                skill_score = 30 / Project_Skills.objects.filter(project=project).count()
                # print(Faculty_Interest.objects.filter(faculty=faculty).count())
                print(Faculty_Interest.objects.filter(faculty=faculty).count(),"ohg\n")
                interest_score = 20 / Faculty_Interest.objects.filter(faculty=faculty).count()

                if not assistant.availability:
                    score -= 100
                else:
                    score += 30

                project_skill_ids = list(Project_Skills.objects.filter(project=project).values_list('skills__id', flat=True))
                for skill_id in RA_Skills.objects.filter(rA_id=assistant.id).values_list('skills_id', flat=True):
                    if skill_id in project_skill_ids:
                        score += skill_score

                if faculty.account.department == project.department:
                    score += 30

                Faculty_interest_ids = list(Faculty_Interest.objects.filter(faculty=faculty).values_list('interest__id', flat=True))
                for interest_id in Faculty_interest_ids:
                    if interest_id in RA_Interest.objects.filter(rA_id=assistant.id).values_list('interest_id', flat=True):
                        score += interest_score

                scores[assistant.id] = score

            sorted_scores = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))
            top_3 = dict(list(sorted_scores.items())[:3])
            return JsonResponse({'scores': top_3})
        else:
            return JsonResponse({'error': serializer.errors}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_project(request):
    serializer = ProjectCreationSerializer(data=request.data, context={"request": request})
    if serializer.is_valid():
        project = serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def get_project_details(request):


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    try:
        user = CustomUser.objects.get(id=request.user.id)
    except CustomUser.DoesNotExist:
        return Response({"error": "Not found!"})

    return Response(CustomUserSerializer(user).data)


    """
    Retrieve details of a milestone associated with a project.

    Args:
        request (HttpRequest): The HTTP request object.
        project_milestone_id (int): The unique identifier of the project milestone.

    Returns:
        Response: A serialized representation of the milestone if found.
    """
@api_view(["GET"])
def view_milestone(request, project_milestone_id):
    try:
        project_milestone = ProjectMilestones.objects.get(id=project_milestone_id)
        milestone = project_milestone.milestone
        serializer = MilestoneSerializer(milestone)
        return Response(serializer.data)
    except:
        return Response({'error':'No such milestone'}, status=status.HTTP_404_NOT_FOUND)