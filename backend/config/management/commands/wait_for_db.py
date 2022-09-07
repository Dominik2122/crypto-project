import time

from django.core.management.base import BaseCommand
from django.db.utils import OperationalError
from psycopg2 import OperationalError as Psycopg2Error


class Command(BaseCommand):

    def handle(self, *args, **options):
        print(args)
        print(options)
        self.stdout.write('Waiting for db...')
        db_up = False
        while db_up is False:
            try:
                self.check(databases=['default'])
                db_up = True
            except (OperationalError, Psycopg2Error):
                self.stdout.write('Database unavailable, waiting 10 seconds')
                time.sleep(10)
        self.stdout.write(self.style.SUCCESS('Database available'))
