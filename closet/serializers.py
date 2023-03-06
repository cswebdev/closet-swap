from rest_framework import serializers
from .models import Category, ClothingItem

class CategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Category
        fields = '__all__'


class ClothingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingItem   
        field = "__all__"