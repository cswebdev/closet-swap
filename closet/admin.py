from django.contrib import admin
from .models import  ClothingItem, Image

# Register your models here.

admin.site.register(ClothingItem)
admin.site.register(Image)