from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    type = models.CharField(max_length=100,)
    image_url = models.CharField(max_length=255,)
    attributes = models.TextField()
    is_favorite = models.BooleanField()
    description = models.TextField()
    date_adopted = models.DateTimeField(auto_now_add=True,)
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="pet_user",)
