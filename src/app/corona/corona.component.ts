import { Component, OnInit } from '@angular/core';
import { Corona } from 'src/app/models/corona';
@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  
  isEdit:boolean = false
 
  coronas:Corona[]=[]

  corona:Corona={
    code:-1,
    statename:'',
    active:-1,
    recovered:-1,
    death:-1,
    
  }
      
  constructor() { }

  ngOnInit(): void {
      
  }

  addCorona():void{
    let coronanew={
      code:this.corona.code,
      statename:this.corona.statename,
      active:this.corona.active,
      recovered:this.corona.recovered,
      death:this.corona.death,
    }
    this.coronas.push(coronanew)
    console.log("coronas")
    console.log(this.corona)    
    this.clearData()

  }

  deletecorona(codedel:number){
    console.log("code ",codedel)

    this.coronas=this.coronas.filter(corona=>corona.code !=codedel)
  }
  
  editCorona(codeupd:number){
    this.isEdit=true
    console.log("code ",codeupd)
    let updCorona:Corona={
      code:-1,
      statename:'',
      active:-1,
      recovered:-1,
      death:-1,
    }

    this.coronas.find(corona=>{
      if (corona.code==codeupd)
      {
        updCorona=corona
      }   
    })
    this.corona = updCorona

  }

  clearData(){
        this.corona={
      code:-1,
      statename:'',
      active:-1,
      recovered:-1,
      death:-1,
    }
  }

  updateCorona(){
    console.log("update corona")

    let updCorona:Corona={
      code: this.corona.code,
      statename: this.corona.statename,
      active: this.corona.active,
      recovered: this.corona.recovered,
      death: this.corona.death,
    }

    this.coronas.map(corona=>{
      if (corona.code==updCorona.code)
      {
        corona=updCorona
      }

    })

    console.log("updated corona ",this.coronas)
    this.clearData()
    this.isEdit=false
  }


}

