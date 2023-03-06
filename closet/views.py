from django.shortcuts import render
from rest_framework import generics
from django.urls import path, include
from .models import Category, ClothingItem
from .serializers import CategorySerializer, ClothingItemSerializer

# Create your views here.

class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ClothingItemListAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ClothingItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer
    