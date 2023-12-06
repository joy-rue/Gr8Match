from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from typing import List
from ..serializers import *


# Retireve project data in the database

@api_view(['GET'])
def project_detail(request, project_name):
    try:
        # Retrieve the project from the database based on the project name
        project = Projects.objects.get(title=project_name)

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



def Gr8match(project_id: int, assistant_ids: List[int], faculty_id: int):
    # Retrieve Django models instances based on primary keys
    project = Projects.objects.get(project_id=project_id)
    assistants = RA.objects.filter(rA_id__in=assistant_ids)
    faculty = Faculty.objects.get(faculty_id=faculty_id)

    scores = {}

    for assistant in assistants:
        score = 0
        skill_score = 30 / project.project_skills.count()
        interest_score = 20 / faculty.faculty_interest.count()

        if not assistant.availability:
            score -= 100
        else:
            score += 30

        for skill in project.project_skills.all():
            if skill in assistant.ra_skills.all():
                score += skill_score
            else:
                score -= skill_score

        if assistant.department == project.department:
            score += 30

        for interest in faculty.faculty_interest.all():
            if interest in assistant.ra_interest.all():
                score += interest_score

        scores[assistant.first_name + ' ' + assistant.last_name] = score

    print(scores)


@api_view(["POST"])
def create_project(request):
    serializer = ProjectCreationSerializer(data=request.data)
    if serializer.is_valid():
        project=serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
