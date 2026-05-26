from rest_framework import serializers
from books.models import Book



# Serializers define the API representation.
class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ('id','title', 'author', 'genre', 'publication_year')