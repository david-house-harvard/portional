# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-27 00:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0002_auto_20171227_0003'),
    ]

    operations = [
        migrations.AddField(
            model_name='instruction',
            name='order',
            field=models.SmallIntegerField(default=0),
            preserve_default=False,
        ),
    ]