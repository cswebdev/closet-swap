from django.urls import path, include
from .views import IndexView

app_name = "frontend"

#https://docs.djangoproject.com/en/4.1/topics/class-based-views/
#explaiing .as_view
urlpatterns = [

    path("", IndexView.as_view())
]