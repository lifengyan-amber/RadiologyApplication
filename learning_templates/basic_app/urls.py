from django.contrib import admin
from django.urls import path, include
from basic_app import views
from django.conf.urls import url

#TEMPLATE TAGGING
app_name = 'basic_app'

urlpatterns = [
    url(r'^flowchart/$', views.flowchart, name = 'flowchart'),
    url(r'^quiz/$', views.quiz, name = 'quiz'),
     url(r'^calculation/$', views.calculate, name = 'calculate'),
]
