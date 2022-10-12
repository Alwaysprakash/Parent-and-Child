import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  url:string="http://localhost:3000/customermanagment"
 

  constructor(private httpClient:HttpClient) { }
  getCustomers() {
    return this.httpClient.get<Customers[]>(this.url)
  }
  addCustomer(data:Customers){
    return this.httpClient.post<Customers>(this.url,data)
  }
  deleteCustomer(id:number){
    return this.httpClient.delete<Customers>(this.url +'/'+id)
  }
  updateCustomer(updcust:Customers,id:number){
    return this.httpClient.put<Customers>(this.url +'/'+id,updcust)
  }
}
