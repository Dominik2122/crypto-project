from django.db import models

from wallet.models import WalletAsset


class Transaction(models.Model):
    bought = models.ForeignKey(WalletAsset)
