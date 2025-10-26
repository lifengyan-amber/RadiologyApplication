from django.contrib import admin
from django.urls import path, include
from basic_app import views

#TEMPLATE TAGGING
app_name = 'basic_app'

urlpatterns = [
    path('flowchart/', views.flowchart, name = 'flowchart'),
    path('quiz/', views.quiz, name = 'quiz'),
    path('icc1A/', views.icc1A, name = 'icc1A'),
    path('icckA/', views.icckA, name = 'icckA'),
    path('icc31C/', views.icc31C, name = 'icc31C'),
    path('icc3kC/', views.icc3kC, name = 'icc3kC'),
    path('icc21A/', views.icc21A, name = 'icc21A'),
    path('icc2kA/', views.icc2kA, name = 'icc2kA'),
    path('icc1c/', views.icc1c, name = 'icc1c'),
    path('icckc/', views.icckc, name = 'icckc'),
    path('icc11a/', views.icc11a, name = 'icc11a'),
    path('icc1ka/', views.icc1ka, name = 'icc1ka'),
    path('weightedkappa/', views.weightedkappa, name = 'weightedkappa'),
    path('fleisskappa/', views.fleisskappa, name = 'fleisskappa'),
    path('ccc/', views.ccc, name = 'ccc'),
    path('SEM/', views.SEM, name = 'SEM'),
    path('loa/', views.LOA, name = 'LOA'),
]
