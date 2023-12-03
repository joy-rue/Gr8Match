from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import *
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
