# Generated by Django 4.1.7 on 2023-03-15 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0009_remove_clothingitem_color_alter_clothingitem_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='clothingitem',
            name='color',
            field=models.CharField(choices=[('black', 'black'), ('gray', 'gray'), ('white', 'white'), ('ivory', 'ivory'), ('tan', 'tan'), ('brown', 'brown'), ('purple', 'purple'), ('blue', 'blue'), ('teal', 'teal')], default='black', max_length=10),
            preserve_default=False,
        ),
    ]
