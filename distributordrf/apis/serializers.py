from rest_framework import serializers
from tables import models


class advanceSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.advance

class attendanceSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.attendance

class deductionSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.deduction

class departmentSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.department

class designationSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.designation

class employeesSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.employees

class expensecategorySerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.expensecategory

class expensesSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.expenses

class itemtypeSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.itemtype

class locationSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.location

class packetsizeSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.packetsize

class partySerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.party

class payemntmodeSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.payemntmode

class purchaseSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.purchase

class roleSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.role

class salarySerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.salary

class saleSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.sale

class salevisitSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.salevisit

class sectionSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.section

class usersSerializer(serializers.ModelSerializer):
 class Meta:
  fields = "__all__"
  model = models.users