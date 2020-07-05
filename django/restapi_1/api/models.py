from django.db import models


class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('Name', max_length=100)
    lastname = models.CharField('Lastname', max_length=100)
    username = models.CharField('Username', max_length=100)

    def __str__(self):
        return '{0},{1}'.format(self.lastname, self.name)
