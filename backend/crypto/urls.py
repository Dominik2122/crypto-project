from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('asset/', include('asset.urls')),
    path('admin/', admin.site.urls),
    path('', views.detail, name='index')
]
