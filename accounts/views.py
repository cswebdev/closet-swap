from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import generics
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProfileSerializer
from .models import Profile, User
from django.http import JsonResponse
from twilio.rest import Client
from django.conf import settings




# Create your views here.

User = get_user_model()
class ProfileCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        # serializer.save(user=get_object_or_404(User, id=1))
        serializer.save(user=self.request.user)

class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user=self.kwargs['pk']
        return Profile.objects.filter(user=user)
        
    
class ProfileDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, user=self.request.user)
        return obj
    

# def send_sms(request): 
#     client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
#     message = client.messages.create(
#         to = User.phone_number,
#         from_ = +18888147157,
#         body = "Hello from Twilio!",
#     )
#     return JsonResponse({'message': 'Message sent!'})

