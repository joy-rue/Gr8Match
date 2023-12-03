from django.urls import path
from . import views
from .views import *

urlpatterns = [
    # For URL: localhost:8000 and view function: app_home
    # path('', views.app_home, name='app_home'),
    path('project_details/<str:project_name>/', project_detail, name='project_detail'),
]