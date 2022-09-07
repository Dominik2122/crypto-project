from django.conf import settings
from django.db import models


class Wallet(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def get_all_assets(self):
        return self.asset.get()
