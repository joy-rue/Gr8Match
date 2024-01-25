from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator
from datetime import datetime

from Account.models import UserAccount
from Miscelleneous.models import AcademicYear, Semester
from .helper import (transcript_upload_path, sample_upload_path, profile_picture_upload_path,
                     cv_upload_path)


class DegreeType(models.TextChoices):
    """
    defines choices for degree types
    types: (BSc, MSc, PhD)
    """

    AA = "AA", _("Associate of Arts")
    AS = "AS", _("Associate of Science")
    BA = "BA", _("Bachelor of Arts")
    BSc = "BSc", _("Bachelor of Science")
    BFA = "BFA", _("Bachelor of Fine Arts")
    LLB = "LLB", _("Bachelor of Laws")
    LLM = "LLM", _("Master of Laws")
    JD = "JD", _("Juris Doctor")
    BCL = "BCL", _("Bachelor of Civil Law")
    BLS = "BLS", _("Bachelor of Legal Studies")
    BPhil = "BPhil", _("Bachelor of Philosophy")
    BEng = "BEng", _("Bachelor of Engineering")
    BEd = "BEd", _("Bachelor of Education")
    MA = "MA", _("Master of Arts")
    MSc = "MSc", _("Master of Science")
    MBA = "MBA", _("Master of Business Administration")
    PhD = "PhD", _("Doctor of Philosophy")
    EdD = "EdD", _("Doctor of Education")
    MD = "MD", _("Doctor of Medicine")
    EdS = "EdS", _("Education Specialist")
    EngD = "EngD", _("Doctor of Engineering")
    PsyD = "PsyD", _("Doctor of Psychology")
    DMA = "DMA", _("Doctor of Musical Arts")


class Degree(models.Model):
    """
    defines attributes for a degree class

    Attributes:
        - user (UserAccount): the user's account
        - type (CharField): type of degree
        - university (CharField): university of degree
        - major (CharField): major of degree
        - graduation_year (IntegerField): year of graduation
        - transcript (FileField): degree transcript
        - created_at (DateTimeField): date degree was created
    """

    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    type = models.CharField(max_length=100, choices=DegreeType.choices)
    university = models.CharField(max_length=100)
    major = models.CharField(max_length=100)
    graduation_year = models.IntegerField(validators=[MaxValueValidator(datetime.now().year)])
    transcript = models.FileField(upload_to=transcript_upload_path, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.type} in {self.major} from {self.university} - {self.graduation_year}"


class WritingSample(models.Model):
    """
    defines attributes for a writing sample class

    Attributes:
        - user (UserAccount): the user's account
        - title (CharField): title of writing sample
        - publication_link (CharField): link to publication
        - sample (FileField): writing sample
        - created_at (DateTimeField): date writing sample was created
    """

    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    title = models.CharField(max_length=500)
    publication_link = models.CharField(max_length=250, blank=True, null=True)
    sample = models.FileField(upload_to=sample_upload_path, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class StudyArea(models.TextChoices):
    """
    defines choices for study areas
    """

    Artificial_Intelligence = "Artificial Intelligence", _("Artificial Intelligence")
    Algorithm = "Algorithm", _("Algorithm")
    Computer_Engineering = "Computer Engineering", _("Computer Engineering")
    Cryptography = "Cryptography", _("Cryptography")
    Robotics = "Robotics", _("Robotics")
    Computer_Vision = "Computer Vision", _("Computer Vision")
    Software_Engineering = "Software Engineering", _("Software Engineering")
    Computational_Science = "Computational Science", _("Computational Science")
    Numerical_Analysis = "Numerical Analysis", _("Numerical Analysis")
    Market_Research = "Market Research", _("Market Research")
    Financial_Accounting = "Financial Accounting", _("Financial Accounting")
    International_Trade_Policy = "International Trade & Policy", _("International Trade & Policy")
    Organisations_Behaviour = "Organisational Behaviour", _("Organisational Behaviour")
    Managerial_Behaviour = "Managerial Behaviour", _("Managerial Behaviour")
    Marketing = "Marketing", _("Marketing")
    Operations_Management = "Operations Management", _("Operations Management")
    International_Finance = "International Finance", _("International Finance")
    Supply_Chain_Management = "Supply-Chain Management", _("Supply-Chain Management")
    Business_Law = "Business Law", _("Business Law")
    Competitive_Strategy = "Competitive Strategy", _("Competitive Strategy")
    Corporate_Finance = "Corporate Finance", _("Corporate Finance")
    Product_Development = "Product Development", _("Product Development")
    

class Interest(models.Model):
    """
    defines attributes for an interest class

    Attributes:
        - name: name of interest
        - study_area: study area of interest
    """

    name = models.CharField(max_length=100, unique=True)
    study_area = models.CharField(max_length=100, choices=StudyArea.choices)

    def __str__(self):
        return f"{self.name} : {self.study_area}"
    

class Department(models.TextChoices):
    """
    defines choices for department types
    types: (Humanities & Social Sciences, Business Administration, Computer Science &
            Information Systems, Engineering)
    """

    Humanities_Social_Sciences = "Humanities & Social Sciences", _("Humanities & Social Sciences")
    Business_Administration = "Business Administration", _("Business Administration")
    Computer_Science_Information_Systems = "Computer Science & Information Systems", _("Computer Science & Information Systems")
    Engineering = "Engineering", _("Engineering")


class ResearchAssistant(models.Model):
    """
    defines attributes for a research assistant class

    Attributes:
        - user (UserAccount): the user's account
        - bio (TextField): the user's bio
        - profile_picture (ImageField): the user's profile picture
        - interests (ManyToManyField): the user's interests* (normalised to RAInterests)
        - linkedin_url (CharField): the user's linkedin url
        - cv (FileField): the user's cv
    """

    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE, primary_key=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to=profile_picture_upload_path, blank=True, null=True)
    linkedin_url = models.CharField(max_length=250, blank=True, null=True)
    cv = models.FileField(upload_to=cv_upload_path, blank=True, null=True)

    def __str__(self):
        return f"{self.user.firstname} {self.user.lastname}: {self.linkedin_url}"


class RAInterests(models.Model):
    """
    defines attributes for a RA interests class

    Attributes:
        - ra (ResearchAssistant): the research assistant
        - interest (Interest): the research assistant's interest
    """

    ra = models.ForeignKey(ResearchAssistant, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.ra.user.firstname} {self.ra.user.lastname}: {self.interest.name}"
    

class ResearchAssistantAvailability(models.Model):
    """
    defines attributes for a research assistant availability class

    Attributes:
        - ra (ResearchAssistant): the research assistant
        - semester (Semester): the semester
    """

    ra = models.ForeignKey(ResearchAssistant, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.semester.year.start_year}-{self.semester.year.end_year} {self.semester.semester}: {self.ra.user.firstname} {self.ra.user.lastname}"
    

class Faculty(models.Model):
    """
    defines attributes for a faculty class

    Attributes:
        - user (UserAccount): the user's account
        - bio (TextField): the user's bio
        - profile_picture (ImageField): the user's profile picture
        - department (CharField): the user's department
        - interests (ManyToManyField): the user's interests* (normalised to FacultyInterests)
    """

    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE, primary_key=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to=profile_picture_upload_path, blank=True, null=True)
    department = models.CharField(max_length=100, choices=Department.choices)

    def __str__(self):
        return f"{self.user.firstname} {self.user.lastname}: {self.department}"
    

class FacultyInterests(models.Model):
    """
    defines attributes for a faculty interests class

    Attributes:
        - faculty (Faculty): the faculty
        - interest (Interest): the faculty's interest
    """

    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.faculty.user.firstname} {self.faculty.user.lastname}: {self.interest.name}"