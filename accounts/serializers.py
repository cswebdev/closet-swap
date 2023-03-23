from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import Profile, User
from closet.serializers import ClothingItemSerializer
from phonenumber_field.serializerfields import PhoneNumberField


class ProfileSerializer(serializers.ModelSerializer):
    phone_number = PhoneNumberField(source='user.phone_number')
    city = serializers.ReadOnlyField(source='user.city')
    state = serializers.ReadOnlyField(source='user.state')
    clothing_items = ClothingItemSerializer(source='user.clothing_items', many=True, read_only=True)
    username = serializers.StringRelatedField(source='user.username', read_only=True)
   


    class Meta: 
        model = Profile
        fields = '__all__'

class CustomRegisterSerializer(RegisterSerializer):
    gender = serializers.CharField(max_length=2)
    city = serializers.CharField(max_length=20)
    state = serializers.CharField(max_length=20)
    phone_number = PhoneNumberField()

    def custom_signup(self, request, user):
        user.gender = self.validated_data.get('gender', '')
        user.save(update_fields=['gender'])
        user.phone_number = self.validated_data.get('phone_number', '')
        user.save(update_fields=['phone_number'])
        user.city = self.validated_data.get('city', '')
        user.save(update_fields=['city'])
        user.state = self.validated_data.get('state', '')
        user.save(update_fields=['state'])
        

        profile = Profile.objects.create(user=user)
        profile.save()
