from django.db import models
from django.conf import settings


# Create your models here.

# class Image(models.Model):
#     image = models.ImageField(upload_to='clothing/')

#     def __str__(self):
#         return str(self.url)

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
        ('Tops', 'Tops'), 
        ('Sweaters','Sweaters'),
        ('Bottoms', 'Bottoms'),
        ('Pants', 'Pants'),
        ('Dresses', 'Dresses'),
        ('Skirts', 'Skirts'), 
        ('Active_Wear', 'Active Wear'),
        ('Swim_Wear', 'Swim Wear'), 
        ('Shoes', 'Shoes'),
    )
   
    STYLE_CHOICES = (
        # tops 
        ('Blouses', 'Blouses'), 
        ('Button_Down_Shirts', 'Button Down Shirts'), 
        ('T_Shirt', 'T Shirt'), 
        ('Tank_Tops', 'Tank Top'), 
        ('Short_Sleeve', 'Short Sleeve'),
        ('Long_Sleeve', 'Long Sleeve'),
        ('Sweat_Shirts', 'Sweat Shirt'), 
        ('Sweaters', 'Sweater'),
        ('Cardigans', 'Cardigan'),
        ('Jackets', 'Jacket'),
        ('Coats', 'Coat'),
        ('Strapless', 'Strapless'), 
        ('Halter Tops', 'Halter Tops'), 
        ('Turtlenecks', 'Turtlenecks'), 
        ('Crop_Tops', 'Crop Tops'),
        # bottoms
        ('Pants', 'Pants'),
        ('Jeans', 'Jeans'),
        ('Shorts', 'Shorts'),
        ('Skirts', 'Skirts'),
        # dresses
        ('Casual_Dresses', 'Casual Dresses'),
        ('Formal_Dresses', 'Formal Dresses'),
        ('Cocktail_Dresses', 'Cocktail Dresses'),
        ('Dresses', 'Dresses'),
        ('Evening_Dresses', 'Evening Dresses'),
        ('Mini_Dresses', 'Mini Dresses'),
        ('Maxi_Dresses', 'Maxi Dresses'),
        ('Midi_Dresses', 'Midi Dresses'),
        ('Shift_Dresses', 'Shift Dresses'),
        ('Wrap_Dresses', 'Wrap Dresses'),
        ('A_line_Dresses', 'A line Dresses'),
        

        # active wear
        ('Leggings', 'Leggings'),
        ('Joggers', 'Joggers'),
        ('Sweat_Pants', 'Sweat Pants'),
        ('Sweat_Shorts', 'Sweat Shorts'),
      
        # rompers
        ('Rompers', 'Rompers'),
        # swim wear
        ('Swim_Suits', 'Swim Suit'),
        ('Bikinis', 'Bikini'),
        ('One_Piece', 'One Piece'),
        ('Cover_Up', 'Cover Up'),
        ('Beach_Dresses', 'Beach Dresses'),
        ('Beach_Tops', 'Beach Tops'),
        ('Beach_Bottoms', 'Beach Bottoms'),
        # shoes
        ('Boots', 'Boots'),
        ('Heels', 'Heels'),
        ('Sandals', 'Sandals'),
        ('Flats', 'Flats'),
        ('Sneakers', 'Sneakers'),
        ('Slippers', 'Slippers'),
        ('Flip_Flops', 'Flip Flops'),
        ('Wedges', 'Wedges'),
        ('High_Heels', 'High Heels'),
        ('High_Tops', 'High Tops'),
        ('Low_Tops', 'Low Tops'),
        ('Mid_Tops', 'Mid Tops'),
        ('Wing_Tips', 'Wing Tips'),
        ('Oxfords', 'Oxfords'),
        ('Loafers', 'Loafers'),
        ('Moccasins', 'Moccasins'),
        ('Slip_ons', 'Slip Ons'),

    )

    CONDITION_CHOICES = (
        ('New', 'New'),
        ('Very Good', 'Very Good'), 
        ('Good', 'Good'), 
        ('Fair', 'Fair'), 
        ('Poor', 'Poor'),
    )

    GENDER_CHOICES   = (
        ('Male', 'Male'), 
        ('Female', 'Female'),
        ('Unisex', 'Unisex'),
    )


    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, related_name="clothing_items")
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    style = models.CharField(max_length=20, choices=STYLE_CHOICES)
    brand = models.CharField(max_length=255) 
    color = models.CharField(max_length=20, choices=COLOR_CHOICES)
    size = models.CharField(max_length=20, choices=SIZE_CHOICES)
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    is_active = models.BooleanField(default=True)
    selectedTags = models.JSONField(null=True)
    image = models.ImageField(upload_to='clothing/', blank=True, null=True)


    def __str__(self):
        # return self.image.name
        return self.title

class CheckOut(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    item = models.ForeignKey(ClothingItem, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.user.username
    


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    order_items = models.JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.user.username

    
        