# Generated by Django 4.1.7 on 2023-03-16 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0013_clothingitem_style'),
    ]

    operations = [
        migrations.AddField(
            model_name='clothingitem',
            name='selectedTags',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
