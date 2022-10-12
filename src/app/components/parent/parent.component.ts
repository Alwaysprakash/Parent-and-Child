import { Component, OnInit,AfterViewInit,OnChanges,SimpleChanges, ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,OnChanges{
  msg_parent:string="message from parent"
  msg_child:string=""
  @ViewChild(ChildComponent) child:any
  constructor() { 
  console.log("parent Constructor")
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnChanges")
    console.log("current value ",changes['currentValue'])
    console.log("previous value ",changes['previousValue'])}
    
    ngAfterViewInit(): void {
      console.log("ngAfterViewInit ",this.child.msgToParent)  
      
    }
  
  ngOnInit(): void {
    console.log("Parent : ngOnInit")
  }

  

  receiveMessage($event:any){
    this.msg_child=$event
  }


}
