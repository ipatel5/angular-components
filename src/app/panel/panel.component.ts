import { Component, OnInit ,Input} from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
valuefromswitch;
@Input() bulbc:number;
arrr=[];
  constructor() { }

  ngOnInit() {
    for(var i=0;i<this.bulbc;i++){
      this.arrr.push(i);
    }
  }
  onswitchclick(data){
    this.valuefromswitch=data;
  }

}
