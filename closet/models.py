from django.db import models
from django.conf import settings

# Create your models here.

class Image(models.Model):
    url = models.ImageField(upload_to='clothing/')

    def __str__(self):
        return str(self.url)

#what is a ClothingItem - It's a product listing
class ClothingItem(models.Model): 
    COLOR_CHOICES = (
        ('Black', 'black'), 
        ('Gray', 'gray'),
        ('White', 'white'), 
        ('Ivory', 'ivory'), 
        ('Tan', 'tan'), 
        ('Brown', 'brown'), 
        ('Purple', 'purple'), 
        ('Blue', 'blue'), 
        ('Teal', 'teal'), 
        ('Green', 'green'), 
        ('Red', 'red'), 
        ('Pink', 'pink'), 
        ('Orange', 'orange'), 
        ('Yellow', 'yellow'), 

    )

    SIZE_CHOICES = (
        ('XXS', 'XXS'),
        ('XS', 'Extra Small'),
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'), 
    )
    CATEGORY_CHOICES = (
        ('TOPS', 'Tops'), 
        ('SWEATERS','Sweaters'),
        ('C&J', 'Coats & Jackets'),
        ('JEANS', 'Jeans'),
        ('PANTS', 'Pants'), 
        ('BOTTOMS', 'Bottoms'),
        ('DRESSES', 'Dresses'),
        ('SKIRTS', 'Skirts'), 
        ('SHORTS', 'Shorts'), 
        ('AW', 'Active Wear'),
        ('SW', 'Swim Wear'), 
        ('SHOES', 'Shoes'),
    )
   
    STYLE_CHOICES = (
        ('BL', 'Blouses'), 
        ('BDS', 'Button Down Shirts'), 
        ('KT', 'Knit Tops'), 
        ('TS', 'T Shirt'), 
        ('TT', 'Tank Top'), 
        ('SweatS', 'Sweat Shirt'), 
        ('ST', 'Silk Top'), 
        ('Sless', 'Strapless'), 
        ('HT', 'Halter Tops'), 
        ('Turt', 'Turtlenecks'), 
        ('BS', 'Bodysuits'), 
        ('CROP', 'Cropped')
    )

    CONDITION_CHOICES = (
        ('New', 'New'),
        ('VG', 'Very Good'), 
        ('G', 'Good'), 
        ('F', 'Fair'), 
        ('P', 'Poor'),
    )

    GENDER_CHOICES   = (
        ('Male', 'Male'), 
        ('Female', 'Female'),
        ('Unisex', 'Unisex'),
    )
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    style = models.CharField(max_length=20, choices=STYLE_CHOICES)
    brand = models.CharField(max_length=255) 
    color = models.CharField(max_length=10, choices=COLOR_CHOICES)
    size = models.CharField(max_length=3, choices=SIZE_CHOICES)
    condition = models.CharField(max_length=3, choices=CONDITION_CHOICES)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    is_active = models.BooleanField(default=True)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, related_name="clothing_item")
    selectedTags = models.CharField(max_length=255, null=True, blank=True)


    def __str__(self):
        return self.title

