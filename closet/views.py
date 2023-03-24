import boto3
from django.conf import settings
from django.shortcuts import render
from rest_framework import generics, status

from django.urls import path, include
from .models import  ClothingItem, Order, CheckOut
from accounts.models import User
from .serializers import  ClothingItemSerializer, ImageSerializer, CheckOutSerializer, OrderSerializer
from accounts.send_sms import client
from twilio.rest import Client
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response



# Create your views here.
class ClothingItemListAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.filter(is_active=True)
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

class CheckOutAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = CheckOutSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CheckOutDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = CheckOutSerializer

class ClosetProfileAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.filter()
    serializer_class = ClothingItemSerializer


    def get_queryset(self):
        user=self.kwargs['pk']
        return ClothingItem.objects.filter(user=user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CheckOutAPIView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = CheckOutSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CheckOutDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = CheckOutSerializer

class OrderListAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def send_order_sms(request, UserId):
 if request.method == 'POST':
    from_user = request.user
    to_user = User.objects.get(id=UserId)
    Order, created = Order.objects.get_or_create(from_user=from_user, to_user=to_user)
    if created:
        # send sms to to_user phone number here using twilio client
        if to_user.phone_number is not None:
            message = "You have a new order from {}.".format(from_user.username)
            to_phone_number = to_user.phone_number.as_e164
            from_phone_number = "+18888147157"
            client.messages.create(
                to=to_user.phone_number,
                from_=from_phone_number,
                body= message
            )
            return Response({'message': 'Order sent successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Order not sent successfully'}, status=status.HTTP_200_OK)
