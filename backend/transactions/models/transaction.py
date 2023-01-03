from django.db import models

from wallet.models import WalletAsset

CURRENCY_CHOICES = (
    ('EUR', 'EUR'),
    ('USD', 'USD')
)
CURRENCY_DEFAULT = 'USD'
class Transaction(models.Model):
    bought = models.ForeignKey(WalletAsset, on_delete=models.CASCADE)
    sold = models.ForeignKey(WalletAsset, on_delete=models.CASCADE)
    price = MoneyField(decimal_places=2, max_digits=8,
                       currency_choices=CURRENCY_CHOICES,
                       currency_default=CURRENCY_DEFAULT)
