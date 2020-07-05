from django.urls import path
from .views import PersonList

urlpatterns = [
    path('person/', PersonList.as_view(), name='person_list')
]
