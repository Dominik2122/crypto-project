from django.http import HttpResponse
from requests import Response
from rest_framework import generics, permissions, status
from rest_framework_simplejwt import authentication
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView

import authorization.authenticate
from authorization.serializers import UserSerializer
from crypto import settings
from rest_framework.response import Response


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer


class ManageUserView(generics.RetrieveAPIView, generics.UpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = [authorization.authenticate.CustomAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        # set access token in browser with Httponly cookie.
        res = Response(serializer.validated_data, status=status.HTTP_200_OK)
        access_token = serializer.validated_data['access']
        res.set_cookie("access_token", access_token,
                       max_age=settings.SIMPLE_JWT.get('ACCESS_TOKEN_LIFETIME').total_seconds(),
                       samesite='Lax',
                       secure=False,
                       httponly=True)
        return res