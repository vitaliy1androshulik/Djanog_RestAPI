from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from .models import Category
from .serializers import CategorySerializer

# Create your views here.
class CategoryViewSet(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer