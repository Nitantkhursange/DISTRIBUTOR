from django.db import models
import uuid
import time

def nid():
 return round(time.time())


class advance(models.Model):

 advance = models.CharField(max_length=200,blank=True,null=True)
 date = models.CharField(max_length=200,blank=True,null=True)
 empId = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 mode = models.CharField(max_length=200,blank=True,null=True)
 uid = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class attendance(models.Model):

 empId = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 inTime = models.IntegerField(null=True,blank=True,default=0)
 inTimePhoto = models.CharField(max_length=200,blank=True,null=True)
 outTime = models.IntegerField(null=True,blank=True,default=0)
 outTimePhoto = models.CharField(max_length=200,blank=True,null=True)
 salary = models.CharField(max_length=200,blank=True,null=True)
 tIn = models.JSONField(default=list)
 tOut = models.JSONField(default=list)
 def __str__(self):
  return self.id


class deduction(models.Model):

 def __str__(self):
  return self.id


class department(models.Model):

 department = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 def __str__(self):
  return self.id


class designation(models.Model):

 department = models.CharField(max_length=200,blank=True,null=True)
 designation = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 def __str__(self):
  return self.id


class employees(models.Model):

 aid = models.CharField(max_length=200,blank=True,null=True)
 basicSalary = models.CharField(max_length=200,blank=True,null=True)
 city = models.CharField(max_length=200,blank=True,null=True)
 department = models.CharField(max_length=200,blank=True,null=True)
 designation = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 joiningDate = models.CharField(max_length=200,blank=True,null=True)
 name = models.CharField(max_length=200,blank=True,null=True)
 number = models.CharField(max_length=200,blank=True,null=True)
 paidLeave = models.CharField(max_length=200,blank=True,null=True)
 photo = models.CharField(max_length=200,blank=True,null=True)
 pinCode = models.CharField(max_length=200,blank=True,null=True)
 salaryList = models.JSONField(default=list)
 salaryType = models.CharField(max_length=200,blank=True,null=True)
 state = models.CharField(max_length=200,blank=True,null=True)
 status = models.CharField(max_length=200,blank=True,null=True)
 workingStatus = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class expensecategory(models.Model):

 category = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 subCategory = models.CharField(max_length=200,blank=True,null=True)
 type = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class expenses(models.Model):

 amount = models.CharField(max_length=200,blank=True,null=True)
 category = models.CharField(max_length=200,blank=True,null=True)
 date = models.CharField(max_length=200,blank=True,null=True)
 description = models.CharField(max_length=200,blank=True,null=True)
 From = models.CharField(max_length=200,blank=True,null=True)
 hrm = models.BooleanField(default=False)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 mode = models.CharField(max_length=200,blank=True,null=True)
 subCategory = models.CharField(max_length=200,blank=True,null=True)
 to = models.CharField(max_length=200,blank=True,null=True)
 transId = models.CharField(max_length=200,blank=True,null=True)
 type = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class itemtype(models.Model):

 id = models.CharField(primary_key=True,max_length=200,default=nid)
 itemtype = models.CharField(max_length=200,blank=True,null=True)
 partyName = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id

class location(models.Model):
  
  country = models.CharField(max_length=200,blank=True,null=True)
  id = models.CharField(primary_key=True,max_length=200,default=nid)
  location = models.CharField(max_length=200,blank=True,null=True)
  state = models.CharField(max_length=200,blank=True,null=True)

  def __str__(self):
   return self.id

class packetsize(models.Model):

 correctedStock = models.IntegerField(null=True,blank=True,default=0)
 correctedStockList = models.JSONField(default=list)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 itemType = models.CharField(max_length=200,blank=True,null=True)
 partyName = models.CharField(max_length=200,blank=True,null=True)
 qty = models.CharField(max_length=200,blank=True,null=True)
 size = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class party(models.Model):

 area = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 mobile = models.CharField(max_length=200,blank=True,null=True)
 partyName = models.CharField(max_length=200,blank=True,null=True)
 type = models.CharField(max_length=200,blank=True,null=True)
 city = models.CharField(max_length=200,blank=True,null=True)
 date = models.IntegerField(null=True,blank=True,default=0)
 status = models.CharField(max_length=200,blank=True,null=True,default="Active")
 userid = models.CharField(max_length=200,blank=True,null=True)
 username = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class payemntmode(models.Model):

 id = models.CharField(primary_key=True,max_length=200,default=nid)
 paymentmode = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class purchase(models.Model):

 amtR = models.JSONField(default=list)
 cashDiscount = models.CharField(max_length=200,blank=True,null=True)
 date = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 itemList = models.JSONField(default=list)
 partyName = models.CharField(max_length=200,blank=True,null=True)
 paymentStatus = models.CharField(max_length=200,blank=True,null=True)
 remark = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class role(models.Model):

 id = models.CharField(primary_key=True,max_length=200,default=nid)
 permissions = models.JSONField(default=list)
 role = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id


class salary(models.Model):

 amount = models.CharField(max_length=200,blank=True,null=True)
 date = models.CharField(max_length=200,blank=True,null=True)
 empId = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 mode = models.CharField(max_length=200,blank=True,null=True)
 month = models.CharField(max_length=200,blank=True,null=True)
 uid = models.CharField(max_length=200,blank=True,null=True)
 year = models.IntegerField(null=True,blank=True,default=0)
 def __str__(self):
  return self.id


class sale(models.Model):
 amtR = models.JSONField(default=list)
 date = models.CharField(max_length=200,blank=True,null=True)
 visitTime = models.IntegerField(null=True,blank=True,default=0)
 empId = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 itemList = models.JSONField(default=list)
 partyName = models.CharField(max_length=200,blank=True,null=True)
 paymentStatus = models.CharField(max_length=200,blank=True,null=True)
 remark = models.CharField(max_length=200,blank=True,null=True)
 status = models.CharField(max_length=200,blank=True,null=True)
 isVisitOrder = models.BooleanField(default=False)
 photo = models.CharField(max_length=200,blank=True,null=True)
 username = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id

class salevisit(models.Model):
  date = models.IntegerField(null=True,blank=True,default=0)
  id = models.CharField(primary_key=True,max_length=200,default=nid)
  partyName = models.CharField(max_length=200,blank=True,null=True)
  photo = models.CharField(max_length=200,blank=True,null=True)
  remark = models.CharField(max_length=500,blank=True,null=True)
  userid = models.CharField(max_length=200,blank=True,null=True)
  username = models.CharField(max_length=200,blank=True,null=True)

  def __str__(self):
   return self.id

class section(models.Model):

 def __str__(self):
  return self.id


class users(models.Model):

 Address = models.CharField(max_length=200,blank=True,null=True)
 emailId = models.CharField(max_length=200,blank=True,null=True)
 firstName = models.CharField(max_length=200,blank=True,null=True)
 id = models.CharField(primary_key=True,max_length=200,default=nid)
 lastName = models.CharField(max_length=200,blank=True,null=True)
 password = models.CharField(max_length=200,blank=True,null=True)
 phoneNumber = models.CharField(max_length=200,blank=True,null=True)
 role = models.CharField(max_length=200,blank=True,null=True)
 username = models.CharField(max_length=200,blank=True,null=True)
 def __str__(self):
  return self.id