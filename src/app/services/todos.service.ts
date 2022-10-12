import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Todos } from '../models/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url:string="https://jsonplaceholder.typicode.com/todos"
  
  constructor(private httpclient:HttpClient) { }
  getTodos(){
     return this.httpclient.get<Todos[]>(this.url)
  }
}
