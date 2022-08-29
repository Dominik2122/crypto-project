from django.views import generic

from .models import Asset


class IndexView(generic.ListView):
    model = Asset

class DetailView(generic.DetailView):
    model = Asset
