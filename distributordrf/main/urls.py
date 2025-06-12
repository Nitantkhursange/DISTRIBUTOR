from django.contrib import admin
from django.urls import include, path  # new
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("distributordrf/admin/", admin.site.urls),
    path("distributordrf/apis/v1/", include("apis.urls")),  # new
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)