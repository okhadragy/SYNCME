from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from django.utils.text import slugify
from django.contrib.auth.models import User
from django.db.models.signals import post_save,post_delete
from ckeditor.fields import RichTextField
# Create your models here.

class Message(models.Model):
    title = models.CharField(_("title"), max_length=50)
    content = RichTextField(_("content"))
    students = models.ManyToManyField("Student",verbose_name=_("students"), blank=True)
    groups = models.ManyToManyField("Group",verbose_name=_("groups"), blank=True)
    attachement = models.FileField(_("attachement"), upload_to="attachments", max_length=100,blank = True,null=True)
    status = models.BooleanField(_("status"),default=False)
    

    class Meta:
        verbose_name = _("Message")
        verbose_name_plural = _("Messages")
        

    def __str__(self):
        return self.title

class Student(models.Model):
    name = models.CharField(_("name"), max_length=50)
    slug = models.SlugField(_("slug"),blank=True,null=True)
    grade = models.FloatField(_("grade"),blank=True,null=True)
    email = models.EmailField(_("email"),blank=True,null=True)
    phone = models.CharField(_("phone"),max_length=50,blank=True,null=True)
    studentid = models.CharField(_("id"),max_length=50)
    

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Student, self).save(*args,**kwargs)
        

    class Meta:
        verbose_name = _("Student")
        verbose_name_plural = _("Students")

    def __str__(self):
        return self.name

    
class Group(models.Model):
    title = models.CharField(_("title"), max_length=50)
    description = models.TextField(_("description"),blank=True,null=True)
    students = models.ManyToManyField(Student,verbose_name=_("Students"))

    class Meta:
        verbose_name = _("Group")
        verbose_name_plural = _("Groups")

    def __str__(self):
        return self.title


class System(models.Model):
    name = models.CharField(_("name"), max_length=50)
    url = models.URLField(_("URL"), max_length=200,blank=True, null=True)
    
    def __str__(self):
        return self.name





