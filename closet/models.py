from django.db import models
from django.conf import settings

# Create your models here.

#what is a ClothingItem - It's a product listing
class ClothingItem(models.Model): 
    SIZE_CHOICES = (
        ('XS', 'Extra Small'),
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'), 
    )
    CATEGORY_CHOICES = (
        ('TOPS', 'Tops'), 
        ('BOTTOMS', 'Bottoms'),
        ('DRESSES', 'Dresses'),
        ('SKIRTS', 'Skirts'), 
    
    )

    CONDITION_CHOICES = (
        ('N', 'New'),
        ('VG', 'Very Good'), 
        ('G', 'Good'), 
        ('F', 'Fair'), 
        ('P', 'Poor'),
    )

    GENDER_CHOICES   = (
        ('M', 'Male'), 
        ('F', 'Female'),
        ('U', 'Unisex'),
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=7, choices=CATEGORY_CHOICES)
    brand = models.CharField(max_length=255) 
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=2, choices=SIZE_CHOICES)
    condition = models.CharField(max_length=2, choices=CONDITION_CHOICES)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    is_active = models.BooleanField(default=True)
    image=models.ImageField(upload_to='media/', blank=True, null=True)

    def __str__(self):
        return self.title
