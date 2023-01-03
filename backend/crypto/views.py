from django.http import HttpResponse


def detail(request):
    return HttpResponse('ABCDEF')
