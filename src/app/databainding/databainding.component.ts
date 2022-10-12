import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databainding',
  templateUrl: './databainding.component.html',
  styleUrls: ['./databainding.component.css']
})
export class DatabaindingComponent implements OnInit {

disable:boolean=true




demo(){
  return 100
}

  constructor() { }

  ngOnInit(): void {
  }

}



