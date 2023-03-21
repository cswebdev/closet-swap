from django.shortcuts import render
from rest_framework import generics, status
from .models import Chat, ChatRoom
from .serializers import ChatSerializer, ChatRoomSerializer

# Create your views here.


class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        room = self.kwargs['pk']
        return Chat.objects.filter(room=room)
    
class ChatRoomListAPIView(generics.ListCreateAPIView):
    queryset = ChatRoom.objects.all()
    serializer_class = ChatRoomSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        room = self.kwargs['pk']
        return ChatRoom.objects.filter(room=room)
    
class ChatRoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatRoom.objects.all()
    serializer_class = ChatRoomSerializer

class ChatDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
       