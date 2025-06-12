from django.urls import path
from .views import advanceViewSet
from .views import attendanceViewSet
from .views import deductionViewSet
from .views import departmentViewSet
from .views import designationViewSet
from .views import employeesViewSet
from .views import expensecategoryViewSet
from .views import expensesViewSet
from .views import itemtypeViewSet
from .views import locationViewSet
from .views import packetsizeViewSet
from .views import partyViewSet
from .views import payemntmodeViewSet
from .views import purchaseViewSet
from .views import roleViewSet
from .views import salaryViewSet
from .views import saleViewSet
from .views import salevisitViewSet
from .views import sectionViewSet
from .views import usersViewSet
from rest_framework.routers import DefaultRouter

class OptionalSlashRouter(DefaultRouter):
 def __init__(self, *args, **kwargs):
  super().__init__(*args, **kwargs)
  self.trailing_slash = '/?'

router = OptionalSlashRouter()
router.register("advance", advanceViewSet, basename="advances")
router.register("attendance", attendanceViewSet, basename="attendances")
router.register("deduction", deductionViewSet, basename="deductions")
router.register("department", departmentViewSet, basename="departments")
router.register("designation", designationViewSet, basename="designations")
router.register("employees", employeesViewSet, basename="employeess")
router.register("expensecategory", expensecategoryViewSet, basename="expensecategorys")
router.register("expenses", expensesViewSet, basename="expensess")
router.register("itemtype", itemtypeViewSet, basename="itemtypes")
router.register("location", locationViewSet, basename="locations")
router.register("packetsize", packetsizeViewSet, basename="packetsizes")
router.register("party", partyViewSet, basename="partys")
router.register("payemntmode", payemntmodeViewSet, basename="payemntmodes")
router.register("purchase", purchaseViewSet, basename="purchases")
router.register("role", roleViewSet, basename="roles")
router.register("salary", salaryViewSet, basename="salarys")
router.register("sale", saleViewSet, basename="sales")
router.register("salevisit", salevisitViewSet, basename="salevisits")
router.register("section", sectionViewSet, basename="sections")
router.register("users", usersViewSet, basename="userss")
urlpatterns = router.urls