from django.urls import path
from .views import ProfileCreateAPIView, ProfileDetailAPIView, ProfileListAPIView

app_name='accounts'

urlpatterns = [
    path('profiles/current_user/', ProfileDetailAPIView.as_view(), name="profile_detail"),  
    path('profiles/<int:pk>/', ProfileDetailAPIView.as_view(), name="profile_detail"),
    path('profiles/users/<int:pk>/', ProfileDetailAPIView.as_view(), name="profile_list"),
    path('profiles/', ProfileCreateAPIView.as_view(), name="profile_add"),
]