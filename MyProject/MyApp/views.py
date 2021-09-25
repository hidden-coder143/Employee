from django.shortcuts import render
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

# Create your views here.

class EmpView (ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer