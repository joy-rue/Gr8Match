from django.urls import path
from . import views
from .views import project_detail
from .views.RA import RA_profile
from .views.Account import create_account, login

urlpatterns = [
    # For URL: localhost:8000 and view function: app_home
    # path('', views.app_home, name='app_home'),
    path('create_account/', create_account, name='create_account'),
    path('login/', login, name='login'),
    path('project_details/<str:project_name>/', project_detail, name='project_detail'),
    path('ra_details/<str:ras_id>/', RA_profile, name='RA_profile'),
]