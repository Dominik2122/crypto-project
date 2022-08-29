from django.urls import path

from .views import IndexView, DetailView

app_name = 'asset'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('<int:pk>/', DetailView.as_view(), name='detail'),
]
