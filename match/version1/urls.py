from django.urls import path
from . import views
from .views import project_detail
from .views.RA import RA_profile
from .views.Account import create_account, login, change_password
from .views.projects import create_project, get_user_details ,make_match
from .views.Milestones import get_all_milestones, create_milestone, delete_milestone, create_milestone_task, get_milestone_tasks, delete_milestone_task, complete_task

urlpatterns = [
    # For URL: localhost:8000 and view function: app_home
    # path('', views.app_home, name='app_home'),
    path('complete_task/<str:project_milestone_task>/', complete_task, name='complete_task'),
    path('get_milestone_tasks/<str:project_milestone_id>/', get_milestone_tasks, name="get_milestone_tasks"),
    path('delete_milestone_task/<str:project_milestone_task>/', delete_milestone_task, name='delete_milestone_task'),
    path('create_milestone_task/<str:project_milestone_id>/', create_milestone_task, name='create_milestone_task'),
    path('delete_milestone/<str:projectmilestone_id>/', delete_milestone, name='delete_milestone'), # deletes project specific milestones not general milestones
    path('create_milestone/<str:project_id>/', create_milestone, name='create_milestone'),
    path('get_all_milestones/', get_all_milestones, name='get_all_milestones'),
    path('create_project/', create_project, name='create_project'),
    path('change_password/', change_password, name='change_password'),
    path('make_match/', make_match, name='make_match'),
    path('create_account/', create_account, name='create_account'),
    path('login/', login, name='login'),
    path('project_details/<str:project_name>/', project_detail, name='project_detail'),
    path('ra_details/<str:ras_id>/', RA_profile, name='RA_profile'),

    path('user/details/', get_user_details, name='user_details'),
]