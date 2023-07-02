from django.db import models


# Model for all classes in 5e
class Classes(models.Model):
    class HitDieOptions(models.TextChoices):
        D6 = "d6", ("D6")
        D8 = "d8", ("D8")
        D10 = "d10", ("D10")
        D12 = "d12", ("D12")

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128, null=False)
    description = models.CharField(max_length=1024, null=False)
    hit_die = models.CharField(
        max_length=3,
        choices=HitDieOptions.choices,
        null=False,
        default=HitDieOptions.D6,
    )
    primary_ability = models.CharField(max_length=128, null=False)

    # Changing table name
    class Meta:
        db_table = "classes"
