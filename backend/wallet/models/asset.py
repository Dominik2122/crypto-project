from django.db import models


class Asset(models.Model):
    name = models.CharField(max_length=255)
    ticker = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name
