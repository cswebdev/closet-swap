from django.urls import path, include   
from .views import ClothingItemListAPIView, ClothingItemDetailAPIView, ImageCreateAPIView

urlpatterns = [

    path('closet/items/', ClothingItemListAPIView.as_view()), 
    path('closet/items/<int:pk>', ClothingItemDetailAPIView.as_view()), 
    path('closet/images/', ImageCreateAPIView.as_view())
    # # path('closet/images/<int:pk>', ImageCreateDetailAPIView.as_view()),
    # path("<path:resource>/", views.IndexView.as_view()),




]
