# Generated by Django 4.1.7 on 2023-03-16 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0015_remove_clothingitem_image'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.AddField(
            model_name='clothingitem',
            name='image',
            field=models.ImageField(null=True, upload_to='clothing/'),
        ),
    ]
