import { Component, OnInit } from '@angular/core';
import { coronanew } from 'src/app/models/coronanew';
import {CoronanewService } from 'src/app/services/coronanew.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coronanew',
  templateUrl: './coronanew.component.html',
  styleUrls: ['./coronanew.component.css']
})
export class CoronanewComponent implements OnInit {
  message:string=''
  coronas:coronanew[]=[]
  coronaService: any;

  constructor(private coronanewService:CoronanewService) { }
  
  listcoronanew(){
    console.log("list corona")
    this.coronanewService.getcoronanew().subscribe(data=>{
      this.coronas=data
    })
  }

  ngOnInit(): void {
    this.listcoronanew
    }
    addcorona(form:NgForm){
      console.log("add corona")
      console.log(form.value)
      this.coronanewService.addcoronanew(form.value).subscribe(data=>{
        console.log("corona Added Successfully  "+data)
        this.message="corona Added Successfully "
        this.listcoronanew()
      })
      form.reset()
    }
    deletecorona(id:number){
      /*
      console.log("delete corona "+id)
   this.coronaService.deletecorona(id).subscribe(data=>{
        console.log('corona deleted')
        this.listcoronanew()
      })  
    }
  */
  }
}

