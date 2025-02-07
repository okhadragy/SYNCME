from django.shortcuts import render,get_object_or_404
from rest_framework.decorators import action,permission_classes
from .models import *
from .serializers import *
from rest_framework import permissions,viewsets,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

# Create your views here.
@permission_classes((permissions.AllowAny,))
class Signup(APIView):
    def post(self,request):
        data = request.data.copy()
        data["is_superuser"] = True
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=serializer.data.get('username'))
            user.set_password(data.get('password'))
            user.save()
            token = Token.objects.create(user=user)
            return Response({"token":token.key,"user":serializer.data},status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@permission_classes((permissions.AllowAny,))
class Login(APIView):
    def post(self,request):
        data = request.data.copy()
        user = get_object_or_404(User,username=data.get('username'))
        
        if not user.check_password(data.get('password')):
            return Response({"detail":"No User matches the given query."},status=status.HTTP_400_BAD_REQUEST)
        
        token,created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        return Response({"token":token.key,"user":serializer.data})

@permission_classes((permissions.IsAuthenticated,))
class Logout(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

@permission_classes((permissions.IsAuthenticated,))
class getCurentUser(APIView):
    def get(self, request, format=None):
        user = UserSerializer(instance=request.user).data
        return Response({"user":user})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
    
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class SystemViewSet(viewsets.ModelViewSet):
    queryset = System.objects.all()
    serializer_class = SystemSerializer