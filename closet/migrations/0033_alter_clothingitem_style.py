# Generated by Django 4.1.7 on 2023-04-05 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0032_alter_clothingitem_category_alter_clothingitem_style'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothingitem',
            name='style',
            field=models.CharField(choices=[('Blouses', 'Blouses'), ('Button_Down Shirts', 'Button Down Shirts'), ('T_Shirt', 'T Shirt'), ('Tank_Tops', 'Tank Top'), ('Short_Sleeve', 'Short Sleeve'), ('Long_Sleeve', 'Long Sleeve'), ('Sweat_Shirts', 'Sweat Shirt'), ('Sweaters', 'Sweater'), ('Cardigans', 'Cardigan'), ('Jackets', 'Jacket'), ('Coats', 'Coat'), ('Strapless', 'Strapless'), ('Halter Tops', 'Halter Tops'), ('Turtlenecks', 'Turtlenecks'), ('Crop_Tops', 'Crop Tops'), ('Pants', 'Pants'), ('Jeans', 'Jeans'), ('Shorts', 'Shorts'), ('Skirts', 'Skirts'), ('Dresses', 'Dresses'), ('Leggings', 'Leggings'), ('Joggers', 'Joggers'), ('Sweat_Pants', 'Sweat Pants'), ('Sweat_Shorts', 'Sweat Shorts'), ('Sweat_Suits', 'Sweat Suit'), ('Swim_Suits', 'Swim Suit')], max_length=20),
        ),
    ]