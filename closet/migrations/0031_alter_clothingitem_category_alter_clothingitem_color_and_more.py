# Generated by Django 4.1.7 on 2023-03-24 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0030_remove_order_item_details_order_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothingitem',
            name='category',
            field=models.CharField(choices=[('Tops', 'Tops'), ('Sweaters', 'Sweaters'), ('Bottoms', 'Bottoms'), ('Dresses', 'Dresses'), ('Skirts', 'Skirts'), ('AW', 'Active Wear'), ('SW', 'Swim Wear'), ('Shoes', 'Shoes')], max_length=20),
        ),
        migrations.AlterField(
            model_name='clothingitem',
            name='color',
            field=models.CharField(choices=[('Black', 'black'), ('Gray', 'gray'), ('White', 'white'), ('Ivory', 'ivory'), ('Tan', 'tan'), ('Brown', 'brown'), ('Purple', 'purple'), ('Blue', 'blue'), ('Teal', 'teal'), ('Green', 'green'), ('Red', 'red'), ('Pink', 'pink'), ('Orange', 'orange'), ('Yellow', 'yellow')], max_length=20),
        ),
        migrations.AlterField(
            model_name='clothingitem',
            name='condition',
            field=models.CharField(choices=[('New', 'New'), ('Very Good', 'Very Good'), ('Good', 'Good'), ('Fair', 'Fair'), ('Poor', 'Poor')], max_length=20),
        ),
        migrations.AlterField(
            model_name='clothingitem',
            name='size',
            field=models.CharField(choices=[('XXS', 'XXS'), ('XS', 'Extra Small'), ('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('XL', 'Extra Large')], max_length=20),
        ),
        migrations.AlterField(
            model_name='clothingitem',
            name='style',
            field=models.CharField(choices=[('Blouses', 'Blouses'), ('BDS', 'Button Down Shirts'), ('KT', 'Knit Tops'), ('TS', 'T Shirt'), ('TT', 'Tank Top'), ('SweatS', 'Sweat Shirt'), ('ST', 'Silk Top'), ('Sless', 'Strapless'), ('HT', 'Halter Tops'), ('Turt', 'Turtlenecks'), ('BS', 'Bodysuits'), ('CROP', 'Cropped')], max_length=20),
        ),
    ]
