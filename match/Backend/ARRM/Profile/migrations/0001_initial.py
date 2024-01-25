# Generated by Django 4.2.7 on 2023-12-03 02:30

import Profile.helper
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Account', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('bio', models.TextField(blank=True, null=True)),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to=Profile.helper.profile_picture_upload_path)),
                ('department', models.CharField(choices=[('Humanities & Social Sciences', 'Humanities & Social Sciences'), ('Business Administration', 'Business Administration'), ('Computer Science & Information Systems', 'Computer Science & Information Systems'), ('Engineering', 'Engineering')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('study_area', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ResearchAssistant',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('bio', models.TextField(blank=True, null=True)),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to=Profile.helper.profile_picture_upload_path)),
                ('linkedin_url', models.CharField(blank=True, max_length=250, null=True)),
                ('cv', models.FileField(blank=True, null=True, upload_to=Profile.helper.cv_upload_path)),
            ],
        ),
        migrations.CreateModel(
            name='WritingSample',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('publication_link', models.CharField(blank=True, max_length=250, null=True)),
                ('sample', models.FileField(blank=True, null=True, upload_to=Profile.helper.sample_upload_path)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RAInterests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.interest')),
                ('ra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.researchassistant')),
            ],
        ),
        migrations.CreateModel(
            name='FacultyInterests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.faculty')),
                ('interest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.interest')),
            ],
        ),
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('AA', 'Associate of Arts'), ('AS', 'Associate of Science'), ('BA', 'Bachelor of Arts'), ('BSc', 'Bachelor of Science'), ('BFA', 'Bachelor of Fine Arts'), ('LLB', 'Bachelor of Laws'), ('LLM', 'Master of Laws'), ('JD', 'Juris Doctor'), ('BCL', 'Bachelor of Civil Law'), ('BLS', 'Bachelor of Legal Studies'), ('BPhil', 'Bachelor of Philosophy'), ('BEng', 'Bachelor of Engineering'), ('BEd', 'Bachelor of Education'), ('MA', 'Master of Arts'), ('MSc', 'Master of Science'), ('MBA', 'Master of Business Administration'), ('PhD', 'Doctor of Philosophy'), ('EdD', 'Doctor of Education'), ('MD', 'Doctor of Medicine'), ('EdS', 'Education Specialist'), ('EngD', 'Doctor of Engineering'), ('PsyD', 'Doctor of Psychology'), ('DMA', 'Doctor of Musical Arts')], max_length=100)),
                ('university', models.CharField(max_length=100)),
                ('major', models.CharField(max_length=100)),
                ('graduation_year', models.IntegerField(validators=[django.core.validators.MaxValueValidator(2023)])),
                ('transcript', models.FileField(blank=True, null=True, upload_to=Profile.helper.transcript_upload_path)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('is_verified', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]