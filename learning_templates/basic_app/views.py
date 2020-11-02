from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'basic_app/index.html')


def quiz(request):
    return render(request, 'basic_app/quiz.html')


def flowchart(request):
    return render(request, 'basic_app/flowchart.html')

def icc1A(request):
    return render(request, 'basic_app/ICC1A.html')


def icckA(request):
    return render(request, 'basic_app/ICCkA.html')

def icc31C(request):
    return render(request, 'basic_app/ICC31C.html')

def icc3kC(request):
    return render(request, 'basic_app/ICC3KC.html')

def icc21A(request):
    return render(request, 'basic_app/ICC21A.html')


def icc2kA(request):
    return render(request, 'basic_app/ICC2kA.html')

def icc1c(request):
    return render(request, 'basic_app/ICC1C.html')

def icckc(request):
    return render(request, 'basic_app/ICCKC.html')


