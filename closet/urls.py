from django.urls import path, include   
from .views import CategoryListAPIView, ClothingItemListAPIView, ClothingItemDetailAPIView

urlpatterns = [

    path('closets/', CategoryListAPIView.as_view() ),
    path('closets/items/', ClothingItemListAPIView.as_view()), 
    path('closets/items/<int:pk>', ClothingItemDetailAPIView.as_view()), 


]