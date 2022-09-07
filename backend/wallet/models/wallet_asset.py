from django.db import models

from .asset import Asset
from .wallet import Wallet


class WalletAsset(Asset):
    amount = models.DecimalField(decimal_places=15, default=0, max_digits=255)
    wallet = models.ForeignKey(Wallet, blank=False, null=False, related_name='asset', on_delete=models.CASCADE)

    def __str__(self):
        return str(self.wallet.owner.pk) + ' ' + self.name
