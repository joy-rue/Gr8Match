from django.urls import path
from . import views
from .views import project_detail
from .views.faculty import get_all_RAs
from .views.RA import RA_profile
from .views.Account import create_account, login, change_password, add_interest
from .views.projects import create_project, get_user_details ,make_match, view_milestone, add_milestone
from .views.projects import create_project, get_user_details ,make_match
from .views.Account import create_account, login, change_password, FilterSearch
from .views.projects import create_project, get_user_details ,make_match, view_milestone
from .views.Milestones import get_all_milestones, create_milestone, delete_milestone, create_milestone_task, get_milestone_tasks, delete_milestone_task, complete_task

urlpatterns = [
    # For URL: localhost:8000 and view function: app_home
    # path('', views.app_home, name='app_home'),
    path('filtersearch/', FilterSearch.as_view({'get':'list'}), name='filtersearch'),
    path('get_all_RAs/', get_all_RAs, name='get_all_RAs'),
    path('view_milestone/<str:project_milestone_id>/', view_milestone, name='view_milestone'),
    path('complete_task/<str:project_milestone_task>/', complete_task, name='complete_task'),
    path('get_milestone_tasks/<str:project_milestone_id>/', get_milestone_tasks, name="get_milestone_tasks"),
    path('delete_milestone_task/<str:project_milestone_task>/', delete_milestone_task, name='delete_milestone_task'),
    path('create_milestone_task/<str:project_milestone_id>/', create_milestone_task, name='create_milestone_task'),
    path('delete_milestone/<str:projectmilestone_id>/', delete_milestone, name='delete_milestone'), # deletes project specific milestones not general milestones
    path('create_milestone/<str:project_id>/', create_milestone, name='create_milestone'),
    path('get_all_milestones/', get_all_milestones, name='get_all_milestones'),
    path('create_project/', create_project, name='create_project'),
    path('add_milestone/', add_milestone, name='add_milestone'),
    path('change_password/', change_password, name='change_password'),
    path('make_match/', make_match, name='make_match'),
    path('add_interest/', add_interest, name='add_interest'),
    path('create_account/', create_account, name='create_account'),
    path('login/', login, name='login'),
    path('project_details/<str:project_name>/', project_detail, name='project_detail'),
    path('ra_details/<str:ras_id>/', RA_profile, name='RA_profile'),

    path('user/details/', get_user_details, name='user_details'),
]

#todo: make note for project "edit note"/add note to project/create patch call/touch the serialzer

