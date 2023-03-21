from django.db import models
from accounts.models import User, Profile
from django.contrib.auth import get_user_model


# Create your models here.

User = get_user_model()
class Chat(models.Model): 

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    room = models.ForeignKey("ChatRoom",max_length=255, on_delete=models.CASCADE, related_name='room')

    def __str__(self):
        return self.message
    
class ChatRoom(models.Model): 
    name= models.CharField(max_length=255)   

    def __str__(self):
        return self.name