from django.shortcuts import render


def presentation(request):
    return render(request, "presentation.html")

# Add this as well
def angular(request):
    return render(request, "angular.html")