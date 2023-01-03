from django.contrib.auth import get_user_model
from django.test import TestCase

# Create your tests here.
from wallet.models import Wallet, WalletAsset


class WalletAssetTestCase(TestCase):
    def setUp(self):
        email = 'test@example.com'
        password = 'test1234'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )
        wallet = Wallet.objects.create(owner=user)
        wallet.save()
        WalletAsset.objects.create(name="bitcoin", ticker="BTC", amount=100, wallet=wallet)
        WalletAsset.objects.create(name="ethereum", ticker="ETH", amount=10, wallet=wallet)

    def test_name(self):
        btc = WalletAsset.objects.get(ticker="BTC")
        self.assertEqual(btc.__str__(), '1 bitcoin')
