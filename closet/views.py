import boto3
from django.conf import settings
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from django.urls import path, include
from .models import  ClothingItem
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


class ImageCreateAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ImageSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ImageDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ImageSerializer