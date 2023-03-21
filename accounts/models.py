from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
import os
from closet.models import ClothingItem
from phonenumber_field.modelfields import PhoneNumberField


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
    STATE_CHOICES = (
        ('AL', 'Alabama'),
        ('AK', 'Alaska'),
        ('AZ', 'Arizona'),
        ('AR', 'Arkansas'),
        ('CA', 'California'),
        ('CO', 'Colorado'),
        ('CT', 'Connecticut'),
        ('DE', 'Delaware'),
        ('DC', 'District Of Columbia'),
        ('FL', 'Florida'),
        ('GA', 'Georgia'),
        ('HI', 'Hawaii'),
        ('ID', 'Idaho'),
        ('IL', 'Illinois'),
        ('IN', 'Indiana'),
        ('IA', 'Iowa'),
        ('KS', 'Kansas'),
        ('KY', 'Kentucky'),
        ('LA', 'Louisiana'),
        ('ME', 'Maine'),
        ('MD', 'Maryland'),
        ('MA', 'Massachusetts'),
        ('MI', 'Michigan'),
        ('MN', 'Minnesota'),
        ('MS', 'Mississippi'),
        ('MO', 'Missouri'),
        ('MT', 'Montana'),
        ('NE', 'Nebraska'),
        ('NV', 'Nevada'),
        ('NH', 'New Hampshire'),
        ('NJ', 'New Jersey'),
        ('NM', 'New Mexico'),
        ('NY', 'New York'),
        ('NC', 'North Carolina'),
        ('ND', 'North Dakota'),
        ('OH', 'Ohio'),
        ('OK', 'Oklahoma'),
        ('OR', 'Oregon'),
        ('PA', 'Pennsylvania'),
        ('RI', 'Rhode Island'),
        ('SC', 'South Carolina'),
        ('SD', 'South Dakota'),
        ('TN', 'Tennessee'),
        ('TX', 'Texas'),
        ('UT', 'Utah'),
        ('VT', 'Vermont'),
        ('VA', 'Virginia'),
        ('WA', 'Washington'),
        ('WV', 'West Virginia'),
        ('WI', 'Wisconsin'),
        ('WY', 'Wyoming'),
    )

    phone_number=PhoneNumberField(blank=True)
    gender=models.CharField(max_length=3, choices=GENDER_CHOICES)
    state=models.CharField(max_length=2, choices=STATE_CHOICES, blank=True, null=True)
    city=models.CharField(max_length=255, blank=True, null=True)
    display_name=models.CharField(max_length=255, blank=True, null=True)
    avatar=models.ImageField(upload_to="media/avatars/", blank=True, null=True)
    

    
class Profile(models.Model):
    
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    display_name = models.CharField(max_length=255)
    avatar = models.ImageField(upload_to="media/avatars/", blank=True, null=True)
    gender = models.CharField(max_length=3, choices=User.GENDER_CHOICES, blank=True, null=True)
  
    def __str__(self):
       return self.user.username

    # avatar:models.ImageField(upload_to="profiles/")   