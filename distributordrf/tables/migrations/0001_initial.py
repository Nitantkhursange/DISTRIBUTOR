# Generated by Django 5.1.5 on 2025-01-21 08:54

import tables.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='advance',
            fields=[
                ('advance', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('empId', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('mode', models.CharField(blank=True, max_length=200, null=True)),
                ('uid', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='attendance',
            fields=[
                ('empId', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('inTime', models.IntegerField(blank=True, default=0, null=True)),
                ('inTimePhoto', models.CharField(blank=True, max_length=200, null=True)),
                ('outTime', models.IntegerField(blank=True, default=0, null=True)),
                ('outTimePhoto', models.CharField(blank=True, max_length=200, null=True)),
                ('salary', models.CharField(blank=True, max_length=200, null=True)),
                ('tIn', models.JSONField(default=list)),
                ('tOut', models.JSONField(default=list)),
            ],
        ),
        migrations.CreateModel(
            name='deduction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='department',
            fields=[
                ('department', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='designation',
            fields=[
                ('department', models.CharField(blank=True, max_length=200, null=True)),
                ('designation', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='employees',
            fields=[
                ('aid', models.CharField(blank=True, max_length=200, null=True)),
                ('basicSalary', models.CharField(blank=True, max_length=200, null=True)),
                ('city', models.CharField(blank=True, max_length=200, null=True)),
                ('department', models.CharField(blank=True, max_length=200, null=True)),
                ('designation', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('joiningDate', models.CharField(blank=True, max_length=200, null=True)),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('number', models.CharField(blank=True, max_length=200, null=True)),
                ('paidLeave', models.CharField(blank=True, max_length=200, null=True)),
                ('photo', models.CharField(blank=True, max_length=200, null=True)),
                ('pinCode', models.CharField(blank=True, max_length=200, null=True)),
                ('salaryList', models.JSONField(default=list)),
                ('salaryType', models.CharField(blank=True, max_length=200, null=True)),
                ('state', models.CharField(blank=True, max_length=200, null=True)),
                ('status', models.CharField(blank=True, max_length=200, null=True)),
                ('workingStatus', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='expensecategory',
            fields=[
                ('category', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('subCategory', models.CharField(blank=True, max_length=200, null=True)),
                ('type', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='expenses',
            fields=[
                ('amount', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('From', models.CharField(blank=True, max_length=200, null=True)),
                ('hrm', models.BooleanField(default=False)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('mode', models.CharField(blank=True, max_length=200, null=True)),
                ('subCategory', models.CharField(blank=True, max_length=200, null=True)),
                ('to', models.CharField(blank=True, max_length=200, null=True)),
                ('transId', models.CharField(blank=True, max_length=200, null=True)),
                ('type', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='itemtype',
            fields=[
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('itemtype', models.CharField(blank=True, max_length=200, null=True)),
                ('partyName', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='packetsize',
            fields=[
                ('correctedStock', models.IntegerField(blank=True, default=0, null=True)),
                ('correctedStockList', models.JSONField(default=list)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('itemType', models.CharField(blank=True, max_length=200, null=True)),
                ('partyName', models.CharField(blank=True, max_length=200, null=True)),
                ('qty', models.CharField(blank=True, max_length=200, null=True)),
                ('size', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='party',
            fields=[
                ('area', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('mobile', models.CharField(blank=True, max_length=200, null=True)),
                ('partyName', models.CharField(blank=True, max_length=200, null=True)),
                ('type', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='payemntmode',
            fields=[
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('paymentmode', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='purchase',
            fields=[
                ('amtR', models.JSONField(default=list)),
                ('cashDiscount', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('itemList', models.JSONField(default=list)),
                ('partyName', models.CharField(blank=True, max_length=200, null=True)),
                ('paymentStatus', models.CharField(blank=True, max_length=200, null=True)),
                ('remark', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='role',
            fields=[
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('permissions', models.JSONField(default=list)),
                ('role', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='salary',
            fields=[
                ('amount', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('empId', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('mode', models.CharField(blank=True, max_length=200, null=True)),
                ('month', models.CharField(blank=True, max_length=200, null=True)),
                ('uid', models.CharField(blank=True, max_length=200, null=True)),
                ('year', models.IntegerField(blank=True, default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='sale',
            fields=[
                ('amtR', models.JSONField(default=list)),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('empId', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('itemList', models.JSONField(default=list)),
                ('partyName', models.CharField(blank=True, max_length=200, null=True)),
                ('paymentStatus', models.CharField(blank=True, max_length=200, null=True)),
                ('remark', models.CharField(blank=True, max_length=200, null=True)),
                ('status', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='users',
            fields=[
                ('Address', models.CharField(blank=True, max_length=200, null=True)),
                ('emailId', models.CharField(blank=True, max_length=200, null=True)),
                ('firstName', models.CharField(blank=True, max_length=200, null=True)),
                ('id', models.CharField(default=tables.models.nid, max_length=200, primary_key=True, serialize=False)),
                ('lastName', models.CharField(blank=True, max_length=200, null=True)),
                ('password', models.CharField(blank=True, max_length=200, null=True)),
                ('phoneNumber', models.CharField(blank=True, max_length=200, null=True)),
                ('role', models.CharField(blank=True, max_length=200, null=True)),
                ('username', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
