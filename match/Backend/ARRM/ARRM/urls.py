"""
URL configuration for ARRM project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/account/", include("Account.urls"), name="account_api"),
    path("api/profile/", include("Profile.urls"), name="profile_api"),
    path("api/utility/", include("Miscelleneous.urls"), name="utility_api"),
    path("api/project/", include("Project.urls"), name="project_api"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
