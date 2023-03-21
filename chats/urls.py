from django.urls import path
from .views import ChatListAPIView, ChatRoomListAPIView, ChatRoomDetailAPIView, ChatDetailAPIView

urlpatterns = [
    path('chat/rooms/<int:pk>/', ChatRoomDetailAPIView.as_view()),
    path('chat/rooms/', ChatRoomListAPIView.as_view()),
    path('chat/<int:pk>/', ChatDetailAPIView.as_view()),
    path('chat/', ChatListAPIView.as_view()),

]