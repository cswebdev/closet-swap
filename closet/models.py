from django.db import models
from django.conf import settings

# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
            return self.name

class ClothingItem(models.Model): 
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    brand = models.CharField(max_length=255) 
    color = models.CharField(max_length=255)
    condition = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
         return self.author
    
