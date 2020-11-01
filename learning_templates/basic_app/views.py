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


