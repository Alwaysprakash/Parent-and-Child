import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/Todos';

import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todos[]=[]

  constructor(private todoService:TodosService) { }
  

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data)=>{
      //console.log("todos data",data)
      this.todos = data
    })
  }

}
