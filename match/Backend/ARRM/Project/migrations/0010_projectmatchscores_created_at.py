# Generated by Django 4.2.7 on 2023-12-11 15:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0009_rename_projectmatch_projectmatchscores'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectmatchscores',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
