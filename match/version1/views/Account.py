from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from typing import List
from ..serializers import *
from rest_framework.permissions import IsAuthenticated



@api_view(["POST"])
def create_account(request):
    serializer = CustomUserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        
        if serializer.data["role"] == 'Faculty':
            faculty = Faculty.objects.create(
                account = user,
                project = Projects.objects.filter(id=1).first()
            )
            faculty.save()
        else:
            ra = RA.objects.create(
                availability = 1,
                account = user,
                project = Projects.objects.filter(id=1).first()
            )
            ra.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def add_interest(request):
    interests = request.data.get("interests")
    response = []
    for interest in interests:
        object = None
        if Interest.objects.filter(interest_name=interest).exists():
            if request.user.role == "Ra":
                if not RA_Interest.objects.filter(rA=RA.objects.get(account=request.user), interest=Interest.objects.get(interest_name=interest)).exists():
                    object = RA_Interest.objects.create(interest=Interest.objects.get(interest_name=interest),
                                                        rA=RA.objects.get(account=request.user))
                else:
                    object = RA_Interest.objects.get(interest=Interest.objects.get(interest_name=interest),
                                                        rA=RA.objects.get(account=request.user))

                serializer = RAInterestSerializer(object).data
            elif request.user.role == "Faculty":
                if not Faculty_Interest.objects.filter(faculty=Faculty.objects.get(account=request.user),
                                                  interest=Interest.objects.get(interest_name=interest)).exists():
                    object = Faculty_Interest.objects.create(interest=Interest.objects.get(interest_name=interest), faculty=Faculty.objects.get(account=request.user))
                else:
                    object = Faculty_Interest.objects.get(interest=Interest.objects.get(interest_name=interest), faculty=Faculty.objects.get(account=request.user))

                serializer = FacultyInterestSerializer(object).data
            if object:
                response.append(serializer)

    return Response(response, status=200)

# Create accounts for RA or Faculty
@api_view(['POST'])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    
    user = authenticate(email=email, password=password)
    if not user:
        return Response({"error": "Invalid credentials!"}, status=status.HTTP_404_NOT_FOUND)
    
    token, created = Token.objects.get_or_create(user=user)
    return Response({"token": token.key}, status=status.HTTP_200_OK)


@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def change_password(request, *args, **kwargs):
    # partial = kwargs.pop("partial", False)
    serializer = ChangePasswordSerializer(request.user, data=request.data, partial=True, context={"request": request})
    serializer.is_valid(raise_exception = True)
    serializer.update(request.user)
    return Response({"success":"Password changed successfully"}, status=status.HTTP_200_OK)
    