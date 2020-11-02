from django.contrib import admin
from django.urls import path, include
from basic_app import views
from django.conf.urls import url

#TEMPLATE TAGGING
app_name = 'basic_app'

urlpatterns = [
    url(r'^flowchart/$', views.flowchart, name = 'flowchart'),
    url(r'^quiz/$', views.quiz, name = 'quiz'),
    url(r'^icc1A/$', views.icc1A, name = 'icc1A'),
    url(r'^icckA/$', views.icckA, name = 'icckA'),
    url(r'^icc31C/$', views.icc31C, name = 'icc31C'),
    url(r'^icc3kC/$', views.icc3kC, name = 'icc3kC'),
    url(r'^icc21A/$', views.icc21A, name = 'icc21A'),
    url(r'^icc2kA/$', views.icc2kA, name = 'icc2kA'),
    url(r'^icc1c/$', views.icc1c, name = 'icc1c'),
    url(r'^icckc/$', views.icckc, name = 'icckc'),
]
