# Generated by Django 4.2.2 on 2023-07-03 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0002_alter_classes_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classes',
            name='hit_die',
            field=models.CharField(choices=[('D6', 'D6'), ('D8', 'D8'), ('D10', 'D10'), ('D12', 'D12')], default='D6', max_length=3),
        ),
    ]
