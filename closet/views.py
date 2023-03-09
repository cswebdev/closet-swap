from django.shortcuts import render
from rest_framework import generics
from django.urls import path, include
from .models import  ClothingItem
from .serializers import  ClothingItemSerializer

# Create your views here.



class ClothingItemListAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ClothingItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer