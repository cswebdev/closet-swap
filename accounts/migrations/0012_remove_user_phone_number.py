# Generated by Django 4.1.7 on 2023-03-21 19:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_user_avatar'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='phone_number',
        ),
    ]