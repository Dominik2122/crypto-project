from django.urls import path
from authorization import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from authorization.views import MyObtainTokenPairView

app_name = 'user'

urlpatterns = [
    path('token/create/', views.CreateUserView.as_view(), name='create'),
    path('token/', MyObtainTokenPairView.as_view(), name='token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('me/', views.ManageUserView.as_view(), name='me'),
]
