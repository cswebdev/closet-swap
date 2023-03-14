from rest_framework import serializers
from .models import  ClothingItem, Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image   
        fields = '__all__'


class ClothingItemSerializer(serializers.ModelSerializer):
    image_url= ImageSerializer(source="image", read_only=True)
    class Meta:
        model = ClothingItem   
        fields = '__all__'


