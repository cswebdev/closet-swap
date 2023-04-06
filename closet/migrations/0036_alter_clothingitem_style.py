# Generated by Django 4.1.7 on 2023-04-06 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0035_alter_clothingitem_category_alter_clothingitem_style'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothingitem',
            name='style',
            field=models.CharField(choices=[('Blouses', 'Blouses'), ('Button_Down_Shirts', 'Button Down Shirts'), ('T_Shirt', 'T Shirt'), ('Tank_Tops', 'Tank Top'), ('Short_Sleeve', 'Short Sleeve'), ('Long_Sleeve', 'Long Sleeve'), ('Sweat_Shirts', 'Sweat Shirt'), ('Sweaters', 'Sweater'), ('Cardigans', 'Cardigan'), ('Jackets', 'Jacket'), ('Coats', 'Coat'), ('Strapless', 'Strapless'), ('Halter Tops', 'Halter Tops'), ('Turtlenecks', 'Turtlenecks'), ('Crop_Tops', 'Crop Tops'), ('Pants', 'Pants'), ('Jeans', 'Jeans'), ('Shorts', 'Shorts'), ('Skirts', 'Skirts'), ('Casual_Dresses', 'Casual Dresses'), ('Formal_Dresses', 'Formal Dresses'), ('Cocktail_Dresses', 'Cocktail Dresses'), ('Dresses', 'Dresses'), ('Evening_Dresses', 'Evening Dresses'), ('Mini_Dresses', 'Mini Dresses'), ('Maxi_Dresses', 'Maxi Dresses'), ('Midi_Dresses', 'Midi Dresses'), ('Shift_Dresses', 'Shift Dresses'), ('Wrap_Dresses', 'Wrap Dresses'), ('A_line_Dresses', 'A line Dresses'), ('Leggings', 'Leggings'), ('Joggers', 'Joggers'), ('Sweat_Pants', 'Sweat Pants'), ('Sweat_Shorts', 'Sweat Shorts'), ('Rompers', 'Rompers'), ('Swim_Suits', 'Swim Suit'), ('Bikinis', 'Bikini'), ('One_Piece', 'One Piece'), ('Cover_Up', 'Cover Up'), ('Beach_Dresses', 'Beach Dresses'), ('Beach_Tops', 'Beach Tops'), ('Beach_Bottoms', 'Beach Bottoms'), ('Boots', 'Boots'), ('Heels', 'Heels'), ('Sandals', 'Sandals'), ('Flats', 'Flats'), ('Sneakers', 'Sneakers'), ('Slippers', 'Slippers'), ('Flip_Flops', 'Flip Flops'), ('Wedges', 'Wedges'), ('High_Heels', 'High Heels'), ('High_Tops', 'High Tops'), ('Low_Tops', 'Low Tops'), ('Mid_Tops', 'Mid Tops'), ('Wing_Tips', 'Wing Tips'), ('Oxfords', 'Oxfords'), ('Loafers', 'Loafers'), ('Moccasins', 'Moccasins'), ('Slip_ons', 'Slip Ons')], max_length=20),
        ),
    ]
