from django.db import models

# Create your models here.
class Employee (models.Model):
    ID=models.AutoField(primary_key=True)
    FName=models.CharField(max_length=50)
    LName=models.CharField(max_length=100)
    Email=models.EmailField(max_length=100)
    Mobile=models.CharField(max_length=20)

    
    