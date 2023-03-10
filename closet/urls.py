from django.urls import path, include   
from .views import ClothingItemListAPIView, ClothingItemDetailAPIView
from . import views
urlpatterns = [

    path('closets/items/', ClothingItemListAPIView.as_view()), 
    path('closets/items/<int:pk>', ClothingItemDetailAPIView.as_view()), 
    # path("<path:resource>/", views.IndexView.as_view()),




]
