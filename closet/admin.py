from django.contrib import admin
from .models import  ClothingItem, CheckOut, Order


# Register your models here.

admin.site.register(ClothingItem)
# admin.site.register(Image)
admin.site.register(CheckOut)
admin.site.register(Order)