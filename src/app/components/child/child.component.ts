import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  msg:string ="";

  @Output() messageEvent = new EventEmitter<string>();

  msgToParent:string ="Initial message "
  constructor() { console.log("child constructor")
}

  ngOnInit(): void {console.log("child ngOnInit")
}
  

  sendMessage(){
    console.log("message to parent : "+this.msgToParent)
    this.messageEvent.emit(this.msgToParent)
  }
}
