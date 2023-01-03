from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('authorization.urls')),
    path('', views.detail, name='index')
]
