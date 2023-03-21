from django.urls import path
from .views import ChatListAPIView, ChatRoomListAPIView, ChatRoomDetailAPIView, ChatDetailAPIView

app_name='chats'
urlpatterns = [
    path('chats/rooms/<int:pk>/', ChatRoomDetailAPIView.as_view()),
    path('chats/rooms/', ChatRoomListAPIView.as_view()),
    path('chats/delete/<int:pk>/', ChatDetailAPIView.as_view()),
    path('chats/<int:room_id>', ChatListAPIView.as_view()),

]