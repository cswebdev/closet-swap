from django.urls import path, include   
from .views import ClothingItemListAPIView, ClothingItemDetailAPIView, ImageCreateAPIView, ImageDetailAPIView, CheckOutAPIView, ClosetProfileAPIView ,CheckOutDetailAPIView, OrderListAPIView

urlpatterns = [
    path('closet/orders/<int:pk>/', OrderListAPIView.as_view()),
    path('closet/orders/', OrderListAPIView.as_view()),
    path('closet/checkout/delete/<int:pk>/', CheckOutDetailAPIView.as_view()),
    path('closet/checkout/<int:pk>/', CheckOutAPIView.as_view()),
    path('closet/checkout/', CheckOutAPIView.as_view()),
    path('closet/items/<int:pk>/', ClothingItemDetailAPIView.as_view()), 
    path('closet/items/', ClothingItemListAPIView.as_view()), 
    path('closet/images/<int:pk>/', ImageDetailAPIView.as_view()),
    path('closet/images/', ImageCreateAPIView.as_view()),

    # path('closet/profile/<int:pk>', ClosetProfileAPIView.as_view()),
    # path('<path:resource>/', .IndexView.as_view()),




]
