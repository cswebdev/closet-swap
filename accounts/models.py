from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

class User(AbstractUser):
    GENDER_CHOICES= (
        ('M', 'Male'), 
        ('F', 'Female'), 
        ('TM', 'Trans Male'), 
        ('TF', 'Trans Female'),
        ('NB', 'Non Binary'),
        ('GNC', 'Gender Non Conforming'), 
        ('GF', 'Gender Fluid'), 
        ('GQ', 'Gender Queer'),
        ('IS', 'Intersex'),
        ('NA', 'Other'), 
    )
    phone_number=models.CharField(max_length=10)
    gender=models.CharField(max_length=3, choices=GENDER_CHOICES)


class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    display_name = models.CharField(max_length=255)
   
    # avatar:models.ImageField(upload_to="profiles/")