# Generated by Django 4.1.7 on 2023-03-20 15:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('closet', '0022_checkout'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothingitem',
            name='user',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='ClothingItems', to=settings.AUTH_USER_MODEL),
        ),
    ]
