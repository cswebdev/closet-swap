from rest_framework import serializers
from .models import  ClothingItem, Image
from django.conf import settings
import boto3


class ImageSerializer(serializers.ModelSerializer):
    presigned_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Image   
        fields = '__all__'

    def get_presigned_url(self, obj):
        s3 = boto3.client('s3',
                            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,)

        # Generate a pre-signed URL
        url = s3.generate_presigned_url(
            ClientMethod='get_object',
            Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': obj.url.name},
            ExpiresIn=120 # URL expiration time in seconds
        )

        return url

class ClothingItemSerializer(serializers.ModelSerializer):
    image_url= ImageSerializer(source="image", read_only=True)
    class Meta:
        model = ClothingItem   
        fields = '__all__'


