import boto3
from django.conf import settings
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
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

    # def perform_create(self, serializer):
    #     image = serializer.save()
    #     # import pdb 
    #     # pdb.set_trace()

    #     s3 = boto3.client('s3',
    #                         aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    #                         aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,)

    #     # Generate a pre-signed URL
    #     url = s3.generate_presigned_url(
    #         ClientMethod='get_object',
    #         Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': image.url.name},
    #         ExpiresIn=3600 # URL expiration time in seconds
    #     )

    #     # Add the pre-signed URL to the serialized data
    #     data = serializer.data
    #     data['presigned_url'] = url
    #     return Response(data, status=status.HTTP_201_CREATED)

# class ImageCreateDetailAPIView(generics.RetrieveUpdateAPIView):
#     queryset = Image.objects.all()
#     serializer_class = ImageSerializer

#     def perfom_create(self, seralizer):
#         seralizer.save(user=self.request.user)