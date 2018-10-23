import { Component, OnInit, Input,Output 
,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

 @Input() title:string="No title";
 @Input('products') items:string[]=[];
 @Input() color:string;
 current:string;
 @Output('notify') notifyParent:EventEmitter<string>
=new EventEmitter<string>();
 
  constructor() 
  { }

  ngOnInit() {
  }

  handleData(){
      this.notifyParent.emit(this.current);
  }

}
