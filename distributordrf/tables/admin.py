from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import advance
from .models import attendance
from .models import deduction
from .models import department
from .models import designation
from .models import employees
from .models import expensecategory
from .models import expenses
from .models import itemtype
from .models import location
from .models import packetsize
from .models import party
from .models import payemntmode
from .models import purchase
from .models import role
from .models import salary
from .models import sale
from .models import salevisit
from .models import section
from .models import users



@admin.register(advance)
class advanceAdmin(ImportExportModelAdmin):
 pass

@admin.register(attendance)
class attendanceAdmin(ImportExportModelAdmin):
 pass

@admin.register(deduction)
class deductionAdmin(ImportExportModelAdmin):
 pass

@admin.register(department)
class departmentAdmin(ImportExportModelAdmin):
 pass

@admin.register(designation)
class designationAdmin(ImportExportModelAdmin):
 pass

@admin.register(employees)
class employeesAdmin(ImportExportModelAdmin):
 pass

@admin.register(expensecategory)
class expensecategoryAdmin(ImportExportModelAdmin):
 pass

@admin.register(expenses)
class expensesAdmin(ImportExportModelAdmin):
 pass

@admin.register(itemtype)
class itemtypeAdmin(ImportExportModelAdmin):
 pass

@admin.register(location)
class locationAdmin(ImportExportModelAdmin):
 pass

@admin.register(packetsize)
class packetsizeAdmin(ImportExportModelAdmin):
 pass

@admin.register(party)
class partyAdmin(ImportExportModelAdmin):
 pass

@admin.register(payemntmode)
class payemntmodeAdmin(ImportExportModelAdmin):
 pass

@admin.register(purchase)
class purchaseAdmin(ImportExportModelAdmin):
 pass

@admin.register(role)
class roleAdmin(ImportExportModelAdmin):
 pass

@admin.register(salary)
class salaryAdmin(ImportExportModelAdmin):
 pass

@admin.register(sale)
class saleAdmin(ImportExportModelAdmin):
 pass

@admin.register(salevisit)
class salevisitAdmin(ImportExportModelAdmin):
 pass

@admin.register(section)
class sectionAdmin(ImportExportModelAdmin):
 pass

@admin.register(users)
class usersAdmin(ImportExportModelAdmin):
 pass