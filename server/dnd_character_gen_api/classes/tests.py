from django.forms import ValidationError
from django.test import TestCase
from .models import Classes


class ClassesModelTests(TestCase):
    def test_hit_die_is_invalid_option(self):
        """
        Expect that the passed value of 'dice' is invalid
        """
        die = "dice"
        new_class = Classes(
            name="Name",
            description="description",
            hit_die=die,
            primary_ability="Strength",
        )
        self.assertRaises(ValidationError, new_class.save, new_class)
