import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { coronanew } from '../models/coronanew';

@Injectable({
  providedIn: 'root'
})
export class CoronanewService {
  deletecoronanew(id: number) {
    throw new Error('Method not implemented.');
  }

  url:string="http://localhost:3000/coronadashboard"

  constructor(private httpClient:HttpClient) { }

  getcoronanew(){
     return this.httpClient.get<coronanew[]>(this.url)

  }

  addcoronanew(data:coronanew){
    return this.httpClient.post<coronanew>(this.url,data)
  }
  delatecorona(id:number){
    return this.httpClient.delete<coronanew>(this.url +'/'+id)
  }
}
