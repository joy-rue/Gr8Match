
from rest_framework import serializers

from .models import *

# Serializers for each model in the app models.py, meant to transform python objects into JSON formatted dictionaries and vice-versa
class FacultySerializer(serializers.ModelSerializer):

  class Meta:
    model = Faculty
    fields = ('__all__')
    
class RASerializer(serializers.ModelSerializer):
  class Meta:
    model = RA
    fields = ('__all__')
    

class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Projects
    fields = ('__all__')
    

class MilestoneSerializer(serializers.ModelSerializer):
  class Meta:
    model = Milestones
    fields = ('__all__')
    

class ProjectMilestoneSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProjectMilestones
    fields = ('__all__')
    

class DepartmentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Department
    fields = ('__all__')
    

class InterestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Interest
    fields = ('__all__')
    

class FacultyInterestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Faculty_Interest
    fields = ('__all__')
    

class RAInterestSerializer(serializers.ModelSerializer):
  class Meta:
    model = RA_Interest
    fields = ('__all__')
    

class RAProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = RA_Project
    fields = ('__all__')
    

class SkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = Skills
    fields = ('__all__')
    

class ProjectSkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project_Skills
    fields = ('__all__')
    
class RASkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = RA_Skills
    fields = ('__all__')
    