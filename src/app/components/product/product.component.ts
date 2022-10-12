import { Component, OnInit } from "@angular/core";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { Product } from "src/app/models/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    prod:Product={
      code:0,
      name:"",
      desc:"",
      manu:"",
      price:0
  } 
  
  products:Product[]=[]
  
    
    constructor() { }
  
    ngOnInit(): void {
      /**
      this.prod={
  
        code:1,
        name:"Smart phone",
        desc:"Vivo next gen",
        manu:"Vivo",
        price:25000
      }
       */
  
      
    }
  
    addProduct():void{
      console.log("Add product clicked")
      console.log("Code",this.prod.code)
      console.log("Price",this.prod.price)
      const newproduct={
        code:this.prod.code,
        name:this.prod.name,
        desc:this.prod.desc,
        manu:this.prod.manu,
        price:this.prod.price
      }
      
      this.products.push(newproduct)
      console.log("product in the cart ",this.products)
      
      
    } 
    }
  
  