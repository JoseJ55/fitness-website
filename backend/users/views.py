from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet
from .serializers import UserSerializer
from .models import User

class UserViewSet(
    GenericViewSet,
    CreateModelMixin,
    RetrieveModelMixin, 
    UpdateModelMixin,
    ListModelMixin
    ):
    serializer_class = UserSerializer
    queryset = User.objects.all()
