from django.urls import path
from .views import ProfileCreateAPIView, ProfileDetailAPIView

app_name='accounts'

urlpatterns = [
    path('profiles/<int:pk>/', ProfileDetailAPIView.as_view(), name="profile_detail"),  
    path('profiles/', ProfileCreateAPIView.as_view(), name="profile_add"),
]