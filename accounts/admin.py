from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile


# Register your models here.
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('gender',)}),
        ('Additional Info', {'fields': ('phone_number',)}),
        ('Additional Info', {'fields': ('city',)}),
        ('Additional Info', {'fields': ('state',)}),
        
    )
admin.site.register(User,CustomUserAdmin)

admin.site.register(Profile) 





