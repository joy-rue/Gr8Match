from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import *
from ..serializers import *


# Retireve project data in the database

@api_view(['GET'])
def RA_profile(request, ra_id):
    try:
        # Retrieve the project from the database based on the project name
        ra = RA.objects.get(rA_id=ra_id)

        # Serialize the project data using the ProjectSerializer
        serializer = RASerializer(ra)

        # Return the serialized project data as a JSON response
        return Response({'RA': serializer.data})

    except Projects.DoesNotExist:
        # Handle the case where the project with the given name does not exist
        return Response({'error': f'RA with id {ra_id} does not exist'}, status=404)