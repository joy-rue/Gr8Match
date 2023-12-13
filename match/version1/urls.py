from django.urls import path
from . import views
# from .views import project_detail
from .views.faculty import get_all_RAs, get_project_applications, accept_application, get_faculty_projects
from .views.RA import get_ra_details, get_all_projects, apply_for_project, get_my_projects
from .views.Account import create_account, login, change_password, add_interest, UploadPicture
from .views.projects import create_project, get_user_details ,make_match, view_milestone, add_milestone, project_detail
from .views.projects import create_project, get_user_details ,make_match, add_comment
from .views.Account import create_account, login, change_password, FilterSearch
from .views.projects import create_project, get_user_details ,make_match, view_milestone
from .views.Milestones import get_all_milestones, create_milestone, delete_milestone, create_milestone_task, get_milestone_tasks, delete_milestone_task, complete_task

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # For URL: localhost:8000 and view function: app_home
    # path('', views.app_home, name='app_home'),
    path('update_picture/', UploadPicture.as_view(), name='update_picture'),
    path('filtersearch/', FilterSearch.as_view({'get':'list'}), name='filtersearch'),
    path('get_all_RAs/', get_all_RAs, name='get_all_RAs'),
    path('add_comment/', add_comment, name='add_comment'),
    path('view_milestone/<str:project_milestone_id>/', view_milestone, name='view_milestone'),
    path('complete_task/<str:project_milestone_task>/', complete_task, name='complete_task'),
    path('get_milestone_tasks/<str:project_milestone_id>/', get_milestone_tasks, name="get_milestone_tasks"),
    path('delete_milestone_task/<str:project_milestone_task>/', delete_milestone_task, name='delete_milestone_task'),
    path('create_milestone_task/<str:project_milestone_id>/', create_milestone_task, name='create_milestone_task'),
    path('delete_milestone/<str:projectmilestone_id>/', delete_milestone, name='delete_milestone'), # deletes project specific milestones not general milestones
    path('create_milestone/<str:project_id>/', create_milestone, name='create_milestone'),
    path('get_all_milestones/', get_all_milestones, name='get_all_milestones'),
    path('get_all_projects/', get_all_projects, name='get_all_projects'),
    path('create_project/', create_project, name='create_project'),
    path('add_milestone/', add_milestone, name='add_milestone'),
    path('change_password/', change_password, name='change_password'),
    path('make_match/', make_match, name='make_match'),
    path('add_interest/', add_interest, name='add_interest'),
    path('create_account/', create_account, name='create_account'),
    path('login/', login, name='login'),
    path('project_details/<str:project_name>/', project_detail, name='project_detail'),
    path('get_project_applications/<str:faculty_id>/', get_project_applications, name='get_project_applications'),
    path('get_ra_details/<str:ra_id>/', get_ra_details, name='get_ra_details'),
    path('apply_for_project/<str:project_id>/<str:ra_id>/', apply_for_project, name='apply_for_project'),
    path('accept_application/<str:project_id>/<str:account_id>/<str:faculty_id>/', accept_application, name='accept_application'),
    path('get_my_projects/<str:user_id>/', get_my_projects, name='get_my_projects'),
    path('get_faculty_projects/<str:owner_id>/', get_faculty_projects, name='get_faculty_projects'),

    path('user/details/', get_user_details, name='user_details'),
]

#todo: make note for project "edit note"/add note to project/create patch call/touch the serialzer

urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)