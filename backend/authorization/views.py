from rest_framework import generics, permissions
from rest_framework_simplejwt import authentication

from authorization.serializers import UserSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer


class ManageUserView(generics.RetrieveAPIView, generics.UpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = [authentication.JWTTokenUserAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
