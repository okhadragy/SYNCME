from .views import *
from django.urls import path,include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'students', StudentViewSet,basename="students")
router.register(r'messages', MessageViewSet,basename="messages")
router.register(r'groups', GroupViewSet,basename="groups")
router.register(r'systems', SystemViewSet,basename="systems")


urlpatterns =[
    path("",include(router.urls)),
    path('token-auth/', obtain_auth_token, name='api_token_auth'),
    path("login/",Login.as_view(),name="login"),
    path("signup/",Signup.as_view(),name="signup"),
    path("logout/",Logout.as_view(),name="logout"),
    path("getcurrentuser/",getCurentUser.as_view(),name="get_current_user"),
]