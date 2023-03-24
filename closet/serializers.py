from rest_framework import serializers
from .models import  ClothingItem, CheckOut, Order
from django.conf import settings
import boto3


class ImageSerializer(serializers.ModelSerializer):
    presigned_url = serializers.SerializerMethodField()
    
    class Meta:
        model = ClothingItem   
        fields = ('id', 'image','presigned_url',)

    def get_presigned_url(self, obj):
        s3 = boto3.client('s3',
                            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,)

        # Generate a pre-signed URL
        url = s3.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': obj.image.name},
            ExpiresIn=120 # URL expiration time in seconds
        )

        return url

class ClothingItemSerializer(serializers.ModelSerializer):
    # image_url= ImageSerializer(source="image", read_only=True)
    user_avatar = serializers.ImageField(source='user.profile.avatar', read_only=True)
    user_profile_id = serializers.IntegerField(source='user.profile.id', read_only=True)
    
    class Meta:
        model = ClothingItem   
        fields = '__all__'

class CheckOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingItem   
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    item_id = serializers.IntegerField(source='item.id', read_only=True)
    class Meta:
        model = Order   
        fields = '__all__'
    
    #using create method to update item.is_active to false
    def create(self, validated_data):
        items = validated_data['order_items']
        for item in items:
            # import pdb 
            # pdb.set_trace()
            instance = ClothingItem.objects.get(id=item['id'])
            instance.is_active = False
            # call that method and send the method the buyer, seller, and item
            instance.save()
        return Order.objects.create(**validated_data)


