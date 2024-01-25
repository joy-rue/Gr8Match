from rest_framework.permissions import BasePermission
from rest_framework.exceptions import AuthenticationFailed
from .models import TokenBlacklist


class IsBlacklistedToken(BasePermission):

    def has_permission(self, request, view):

        access_token = request.META.get("HTTP_AUTHORIZATION").split(' ')[1]
        
        if TokenBlacklist.objects.filter(user=request.user, token=access_token).exists():
                raise AuthenticationFailed("User not authenticated")    
        return True