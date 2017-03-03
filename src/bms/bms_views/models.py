from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Book(models.Model):
    name = models.TextField(db_index=True, null=True, blank=True)
    status = models.CharField(max_length=20, db_index=True, null=True, blank=True)