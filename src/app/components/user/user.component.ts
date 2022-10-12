import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isEdit:boolean = false

  users:User[]=[]

  user:User={
    id:-1,
    name:'',
    mobile:-1,
    email:'',
    location:''
  }
      
  constructor() { }

  ngOnInit(): void {
      
  }

  addUser():void{
    let usernew={
      id:this.user.id,
      name:this.user.name,
      mobile:this.user.mobile,
      email:this.user.email,
      location:this.user.location
    }
    this.users.push(usernew)
    console.log("users")
    console.log(this.user)    
    this.clearData()

  }

  deleteUser(iddel:number){
    console.log("id ",iddel)

    this.users=this.users.filter(user=>user.id !=iddel)
  }
  
  editUser(idupd:number){
    this.isEdit=true
    console.log("id ",idupd)
    let updUser:User={
      id:-1,
      name:'',
      mobile:-1,
      email:'',
      location:''
    }

    this.users.find(user=>{
      if (user.id==idupd)
      {
        updUser=user
      }   
    })
    this.user = updUser

  }

  clearData(){
        this.user={
      id:-1,
      name:'',
      mobile:-1,
      email:'',
      location:''
    }
  }

  updateUser(){
    console.log("update user")

    let updUser:User={
      id:this.user.id,
      name:this.user.name,
      mobile:this.user.mobile,
      email:this.user.email,
      location:this.user.location
    }

    this.users.map(user=>{
      if (user.id==updUser.id)
      {
        user=updUser
      }

    })

    console.log("updated user ",this.users)
    this.clearData()
    this.isEdit=false
  }


}
