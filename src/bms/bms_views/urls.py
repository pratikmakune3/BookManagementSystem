from django.conf.urls import url
from bms_views import views

urlpatterns = [
    url(r'^books/$', views.book_list),
    url(r'^books/(?P<pk>[0-9]+)/$', views.book_detail),
]