from django.shortcuts import render
from rest_framework import generics
from django.urls import path, include
from .models import  ClothingItem, Image
from .serializers import  ClothingItemSerializer, ImageSerializer

# Create your views here.
class ClothingItemListAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ClothingItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer


class ImageCreateAPIView(generics.CreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

# class ImageCreateDetailAPIView(generics.RetrieveUpdateAPIView):
#     queryset = Image.objects.all()
#     serializer_class = ImageSerializer

#     def perfom_create(self, seralizer):
#         seralizer.save(user=self.request.user)