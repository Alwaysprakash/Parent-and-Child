import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customers } from 'src/app/models/customers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  message:string=''
Customers:Customers[]=[]
isEdit:boolean=false


cust:Customers={
  id:-1,
  name:'',
  email:'',
  mobile:0,
  gender:'',
  qualification:'',
  address:'',
  location:'',
  pincode:0
}

constructor(private customersService:CustomersService) { }

listCustomers(){
  console.log("list customers")
  this.customersService.getCustomers().subscribe(data=>{
    this.Customers=data
  })


}
ngOnInit(): void {
  this.listCustomers()
}

addCustomer(form:NgForm){
  console.log("add Customers")
  console.log(form.value)
  this.customersService.addCustomer(form.value).subscribe(data=>{
    console.log("Customers Added Successfully  "+data)
    this.message="Customers Added Successfully "
    this.listCustomers()
  })
  form.reset()
}

deleteCustomer(id:number){
  console.log("delete Customer "+id)
  this.customersService.deleteCustomer(id).subscribe(data=>{
    console.log('customer deleted')
    this.listCustomers()
  })
}

editCustomer(customer:Customers){
  this.isEdit=true
  console.log("edit customer "+customer.id)
  this.cust={
    id:customer.id,
    name:customer.name,
    email:customer.email,
    mobile:customer.mobile,
    gender:customer.gender,
    qualification:customer.qualification,
    address:customer.address,
    location:customer.location,
    pincode:customer.pincode
  }    
}
updateCustomer(){
  console.log("update customer")
  this.customersService.updateCustomer(this.cust,this.cust.id).subscribe(data=>{
    this.message="Customer Updated Successfully "
    this.listCustomers()
  })
  this.isEdit=false
  this.resetData()
}
resetData(){
  this.cust={
    id:-1,
    name:'',
    email:'',
    mobile:-1,
    gender:'',
    qualification:'',
    address:'',
    location:'',
    pincode:-1
  }
}

}
