from django.db import models
from django.utils.translation import gettext_lazy as _


# Model for all classes in 5e
class Classes(models.Model):
    class HitDieOptions(models.TextChoices):
        D6 = "D6", _("D6")
        D8 = "D8", _("D8")
        D10 = "D10", _("D10")
        D12 = "D12", _("D12")

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

    def __str__(self):
        return f"Class Name: {self.name}\nHit Die{self.hit_die}\nPrimary Ability:{self.primary_ability}\nClass Description:{self.description}"

    # Changing table name
    class Meta:
        db_table = "classes"
