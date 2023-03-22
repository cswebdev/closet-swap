from django.urls import path
from .views import ChatListAPIView, ChatDetailAPIView

urlpatterns = [
    path('chats/', ChatListAPIView.as_view(), name='chat-list'),
    path('chats/<int:pk>/', ChatDetailAPIView.as_view(), name='chat-detail'),
    
]
