from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from typing import List
from ..serializers import *


@api_view(["GET"])
def get_all_milestones(request):
    try:
        milestones = Milestones.objects.all()
        
        serializer = MilestoneSerializer(milestones, many=True)
        
        return Response({'milestones': serializer.data})
    
    except Milestones.DoesNotExist:
        return Response({'error': f'No milestone exisits'}, status=404)
    

@api_view(["POST"])
def create_milestone(request, project_id):
    project = Projects.objects.get(id=project_id)
    
    serializer = CreateMilestoneSerializer(data=request.data)
    if serializer.is_valid():
        milestone = serializer.save(project=project)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
def delete_milestone(request, projectmilestone_id):
    try:
        project_milestone = ProjectMilestones.objects.get(id=projectmilestone_id)
        project_milestone.delete()
        
        return Response({'Milestone successfully deleted'}, status=status.HTTP_200_OK)
    except:
        return Response({'error': f'No milestone exisits'}, status=404)
