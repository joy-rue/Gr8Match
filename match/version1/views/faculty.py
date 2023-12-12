from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import *
from ..serializers import *
from typing import List
from django.http import JsonResponse
from django.core.serializers import serialize
import json



@api_view(["GET"])
def get_all_RAs(request):
    try:
        RAs = RA.objects.select_related('account').all()

        # Serialize the queryset
        serialized_data = serialize('json', RAs, fields=('account', 'availability'))

        # Convert serialized data to JSON
        data = json.loads(serialized_data)
        
        print(json.dumps(data, indent=2))

        # Extracting relevant fields from the serialized data
        RAs_with_accounts = []
        for entry in data:
            account_id = entry['fields']['account']
            availability = entry['fields']['availability']

            # Fetch related account data
            account_data = CustomUser.objects.get(id=account_id)

            # Extract relevant account fields
            first_name = account_data.first_name
            last_name = account_data.last_name
            email = account_data.email

            # Create a new dictionary with extracted fields
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