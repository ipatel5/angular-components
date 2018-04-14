import { Component, OnInit,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
@Output() onclk=new EventEmitter
num=0;

  constructor() { }

  ngOnInit() {
  }

    onSwitchClick(){
    if(this.num==0){
      this.onclk.emit(1);
      this.num=1;
    }
    else {
      this.num=0;
      this.onclk.emit(0);
    }
   
  }
}
