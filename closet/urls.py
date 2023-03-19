from django.urls import path, include   
from .views import ClothingItemListAPIView, ClothingItemDetailAPIView, ImageCreateAPIView, ImageDetailAPIView, CheckOutAPIView, ClosetProfileAPIView

urlpatterns = [
    
    path('closet/checkout/', CheckOutAPIView.as_view()),
    path('closet/items/<int:pk>/', ClothingItemDetailAPIView.as_view()), 
    path('closet/items/', ClothingItemListAPIView.as_view()), 
    path('closet/images/<int:pk>/', ImageDetailAPIView.as_view()),
    path('closet/images/', ImageCreateAPIView.as_view()),
    path('closet/profile/<int:pk>', ClosetProfileAPIView.as_view()),
    # path('<path:resource>/', .IndexView.as_view()),




]
