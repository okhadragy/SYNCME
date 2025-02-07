from django.contrib import admin
from .models import *

# Register your models here.
class GroupStudentInline(admin.TabularInline):
    model = Group.students.through
    extra = 1


class MessageStudentInline(admin.TabularInline):
    model = Message.students.through
    extra = 1

class MessageGroupInline(admin.TabularInline):
    model = Message.groups.through
    extra = 1

class GroupAdmin(admin.ModelAdmin):
    inlines = [
        GroupStudentInline,
    ]
    exclude = ('students',)

class StudentAdmin(admin.ModelAdmin):
    inlines = [
        GroupStudentInline,
    ]
    exclude = ('slug',)

class MessageAdmin(admin.ModelAdmin):
    inlines = [
        MessageStudentInline,
        MessageGroupInline,
    ]
    exclude = ('students','groups')


admin.site.register(Message,MessageAdmin)
admin.site.register(Student,StudentAdmin)
admin.site.register(Group,GroupAdmin)
admin.site.register(System)
