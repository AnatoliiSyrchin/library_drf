class Author:
    def __init__(self, name, birthday_year):
        self.name = name
        self.birthday_year = birthday_year

    def __str__(self):
        return self.name


# class Biography(models.Model):
#     text = models.TextField()
#     author = models.OneToOneField(Author, on_delete=models.CASCADE)


# class Book(models.Model):
#     name = models.CharField(max_length=32)
#     authors = models.ManyToManyField(Author)


# class Article(models.Model):
#     name = models.CharField(max_length=32)
#     author = models.ForeignKey(Author, models.PROTECT)
