import { Component, OnInit,Output,Input,OnChanges,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnChanges {
@Input() value ;
 
col;
  constructor() { }

  ngOnChanges() {
    if(this.value==1){
      this.col="yellow"
    }
    else{
      this.col="";
    }
  }

}
