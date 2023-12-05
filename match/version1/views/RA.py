from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import *
from ..serializers import *
from typing import List



# Retireve project data in the database

@api_view(['GET'])
def RA_profile(request, ras_id):
    try:
        # Retrieve the project from the database based on the ra id
        ra = RA.objects.get(rA_id=ras_id)

        # Serialize the project data using the ProjectSerializer
        serializer = RASerializer(ra)

        # Return the serialized project data as a JSON response
        return Response({'RA': serializer.data})

    except Projects.DoesNotExist:
        # Handle the case where the project with the given name does not exist
        return Response({'error': f'RA with id {ras_id} does not exist'}, status=404)