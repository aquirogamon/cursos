from django.db import models


COLORES = (
    ('0', 'Blanco'),
    ('1', 'Negro'),
    ('2', 'Rojo'),
    ('3', 'Amarillo'),
    ('4', 'Azul'),
)


class Deposito(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=30)


class Articulo(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=30)
    cantidad = models.IntegerField()
    color = models.CharField(max_length=2, choices=COLORES)
    deposito = models.ForeignKey(
        Deposito, null=True, on_delete=models.SET_NULL)
