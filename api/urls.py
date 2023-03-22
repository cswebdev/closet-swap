from django.urls import path, include  


app_name="api_v1"
urlpatterns = [
    path('', include('accounts.urls')), 
    path('', include('closet.urls')), 
    # path('', include('chats.urls')),

]