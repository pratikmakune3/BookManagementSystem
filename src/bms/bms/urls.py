from django.conf.urls import url, include
from rest_framework import routers
from bms.views import UserViewSet, GroupViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include('bms_views.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
