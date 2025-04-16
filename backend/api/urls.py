from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import CreateUserView, NoteCreateView, NoteDeleteView

urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('notes/', NoteCreateView.as_view(), name='note-list'),
    path('note/delete/<int:pk>/', NoteDeleteView.as_view(), name='delete-note'),
]
