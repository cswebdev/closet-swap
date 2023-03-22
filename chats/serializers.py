from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Chat

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ChatSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    receiver = UserSerializer(read_only=True)

    class Meta:
        model = Chat
        fields = ['id', 'sender', 'receiver', 'message', 'created_at']
