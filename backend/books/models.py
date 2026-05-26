from django.db import models

class Book(models.Model):

    GENRE_CHOICES = [
        ('Fiction', 'Fiction'),
        ('Non-Fiction', 'Non-Fiction'),
        ('Science', 'Science'),
        ('History', 'History'),
        ('Technology', 'Technology'),
        ('Biography', 'Biography'),
        ('Education', 'Education'),
        ('Comics', 'Comics'),
    ]

    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    genre = models.CharField(max_length=50, choices= GENRE_CHOICES)
    publication_year = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title