from django.db import models

# Create your models here.

class Projects(models.Model):
    title = models.CharField(max_length=30)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.CharField(max_length=250)
    project_id = models.AutoField(primary_key=True)

class Milestones(models.Model):
    milestone = models.CharField(max_length=100)
    milestone_id = models.AutoField(primary_key=True)

class ProjectMilestones(models.Model):
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    milestone = models.ForeignKey(Milestones, on_delete=models.CASCADE)
    milestone_complete = models.BooleanField()
    # primary_key = models.ForeignKey(Projects, Milestones, primary_key=True, on_delete=models.CASCADE)

class Department(models.Model):
    department_name = models.CharField(max_length=20)
    department_id = models.AutoField(primary_key=True)

class Interest(models.Model):
    interest_name = models.CharField(max_length=20)
    interest_id = models.AutoField(primary_key=True)

class Faculty(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    faculty_id = models.AutoField(primary_key=True)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    # interest_id = models.ForeignKey(Interest, on_delete=models.CASCADE)

class RA(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    availability = models.BooleanField(default=True)  # Use BooleanField for true or false
    rA_id = models.AutoField(primary_key=True)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    # interest_id = models.ForeignKey(Interest, on_delete=models.CASCADE)

class Faculty_Interest(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)

class RA_Interest(models.Model):
    rA = models.ForeignKey(RA, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)


class RA_Project(models.Model):
    rA = models.ForeignKey(RA, on_delete=models.CASCADE)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

class Skills(models.Model):
    skill_name = models.CharField(max_length=400)
    skills_id = models.AutoField(primary_key=True)

class Project_Skills(models.Model):
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)
    skills = models.ForeignKey(Skills, on_delete=models.CASCADE)

class RA_Skills(models.Model):
    rA = models.ForeignKey(RA, on_delete=models.CASCADE)
    skills = models.ForeignKey(Skills, on_delete=models.CASCADE)
