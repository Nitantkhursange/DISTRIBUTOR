from rest_framework import viewsets
from tables import models
from .serializers import advanceSerializer
from .serializers import attendanceSerializer
from .serializers import deductionSerializer
from .serializers import departmentSerializer
from .serializers import designationSerializer
from .serializers import employeesSerializer
from .serializers import expensecategorySerializer
from .serializers import expensesSerializer
from .serializers import itemtypeSerializer
from .serializers import locationSerializer
from .serializers import packetsizeSerializer
from .serializers import partySerializer
from .serializers import payemntmodeSerializer
from .serializers import purchaseSerializer
from .serializers import roleSerializer
from .serializers import salarySerializer
from .serializers import saleSerializer
from .serializers import salevisitSerializer
from .serializers import sectionSerializer
from .serializers import usersSerializer
from django_filters.rest_framework import DjangoFilterBackend

class advanceViewSet(viewsets.ModelViewSet):
 queryset = models.advance.objects.all()
 serializer_class = advanceSerializer

class attendanceViewSet(viewsets.ModelViewSet):
 queryset = models.attendance.objects.all()
 serializer_class = attendanceSerializer

class deductionViewSet(viewsets.ModelViewSet):
 queryset = models.deduction.objects.all()
 serializer_class = deductionSerializer

class departmentViewSet(viewsets.ModelViewSet):
 queryset = models.department.objects.all()
 serializer_class = departmentSerializer

class designationViewSet(viewsets.ModelViewSet):
 queryset = models.designation.objects.all()
 serializer_class = designationSerializer

class employeesViewSet(viewsets.ModelViewSet):
 queryset = models.employees.objects.all()
 serializer_class = employeesSerializer

class expensecategoryViewSet(viewsets.ModelViewSet):
 queryset = models.expensecategory.objects.all()
 serializer_class = expensecategorySerializer

class expensesViewSet(viewsets.ModelViewSet):
 queryset = models.expenses.objects.all()
 serializer_class = expensesSerializer
 filter_backends = [DjangoFilterBackend]
 filterset_fields = ["category"]

class itemtypeViewSet(viewsets.ModelViewSet):
 queryset = models.itemtype.objects.all()
 serializer_class = itemtypeSerializer

class locationViewSet(viewsets.ModelViewSet):
 queryset = models.location.objects.all()
 serializer_class = locationSerializer

class packetsizeViewSet(viewsets.ModelViewSet):
 queryset = models.packetsize.objects.all()
 serializer_class = packetsizeSerializer

class partyViewSet(viewsets.ModelViewSet):
 queryset = models.party.objects.all()
 serializer_class = partySerializer
 filter_backends = [DjangoFilterBackend]
 filterset_fields = ["type"]

class payemntmodeViewSet(viewsets.ModelViewSet):
 queryset = models.payemntmode.objects.all()
 serializer_class = payemntmodeSerializer

class purchaseViewSet(viewsets.ModelViewSet):
 queryset = models.purchase.objects.all()
 serializer_class = purchaseSerializer
 filter_backends = [DjangoFilterBackend]
 filterset_fields = ["paymentStatus"]

class roleViewSet(viewsets.ModelViewSet):
 queryset = models.role.objects.all()
 serializer_class = roleSerializer

class salaryViewSet(viewsets.ModelViewSet):
 queryset = models.salary.objects.all()
 serializer_class = salarySerializer

class saleViewSet(viewsets.ModelViewSet):
 queryset = models.sale.objects.all()
 serializer_class = saleSerializer
 filter_backends = [DjangoFilterBackend]
 filterset_fields = ["status","empId","isVisitOrder","paymentStatus"]

class salevisitViewSet(viewsets.ModelViewSet):
 queryset = models.salevisit.objects.all()
 serializer_class = salevisitSerializer

class sectionViewSet(viewsets.ModelViewSet):
 queryset = models.section.objects.all()
 serializer_class = sectionSerializer

class usersViewSet(viewsets.ModelViewSet):
 queryset = models.users.objects.all()
 serializer_class = usersSerializer
