from django.test import Client

client = Client()

from django.urls import reverse

from django.test import TestCase

from .models import Asset


class AssetModelTests(TestCase):

    def test_aaaa(self):
        future_question: Asset = Asset(name='Crypto')
        self.assertIs(future_question.aaa(), 10)
        self.assertIs(future_question.name, 'Crypto')

    def test_siabadabada(self):
        resp = client.get(reverse('asset:index'))
        self.assertIs(resp.status_code, 200)

    def test_siabadabadass(self):
        future_question: Asset = Asset(name='Crypto')
        future_question.save()
        resp = client.get(reverse('asset:detail', args=(1,)))
        self.assertIs(resp.status_code, 200)
