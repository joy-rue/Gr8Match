from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from typing import List
from ..serializers import *


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_milestones(request):
    try:
        milestones = Milestones.objects.all()
        serializer = MilestoneSerializer(milestones, many=True)
        return Response({'milestones': serializer.data})
    except Milestones.DoesNotExist:
        return Response({'error': f'No milestone exists'}, status=404)
    

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_milestone(request, project_id):
    project = Projects.objects.get(id=project_id)
    serializer = CreateMilestoneSerializer(data=request.data)
    if serializer.is_valid():
        milestone = serializer.save(project=project)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_milestone(request, projectmilestone_id):
    try:
        project_milestone = ProjectMilestones.objects.get(id=projectmilestone_id)
        project_milestone.delete()
        return Response({'Milestone successfully deleted'}, status=status.HTTP_200_OK)
    except:
        return Response({'error': f'No milestone exists'}, status=404)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_milestone_task(request, project_milestone_id):
    project_milestone = ProjectMilestones.objects.get(id=project_milestone_id)
    
    serializer = TaskCreationSerialer(data=request.data)
    if serializer.is_valid():
        task = serializer.save(project_milestone)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_milestone_tasks(request, project_milestone_id):
    try: 
        tasks = ProjectMilestoneTask.objects.filter(project_milestone_id=project_milestone_id)
        serializer = TaskSerializer(tasks, many=True)
        return Response({'tasks': serializer.data})
    except:
        return Response({'error': f'No tasks exists'}, status=404)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_milestone_task(request, project_milestone_task):
    try:
        milestone_task = ProjectMilestoneTask.objects.get(id=project_milestone_task)
        milestone_task.delete()
        return Response({'Task successfully deleted'}, status=status.HTTP_200_OK)    
    except:
        return Response({'error': f'No task exists'}, status=404)


@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def complete_task(request, project_milestone_task):
    milestone_task = ProjectMilestoneTask.objects.get(id=project_milestone_task)
    print(request.data["completed"])
    milestone_task.completed = request.data["completed"]
    milestone_task.save()
    return Response({'Task successfully marked as completed'}, status=status.HTTP_200_OK)