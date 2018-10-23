import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today:Date=new Date();
  
  items:string[]=["Fruits","Vegetables","Spices","Stationaries"];

  colors:string[]=['lightblue','tomato','limeyellow','lightgreen']

  products:string[][]=[["Banana","Orange","Gauva","Grapes"],
                      ["Onion","Brinjal","Carrot","Beetroot"],
                       ["Cumin","Cloves","Pepper","Cinnomon"],
                       ["Pen","Pencil","Paper"]];
  
  boxStyle:object={color:'blue',backgroundColor: 'yellow', 
         width:"200px",padding:"10px",fontSize:"20px"};
  info:string;
 
  bgcolor:string="#000000";

  handleClick(current:string):void
  {
    this.info="Item selected...!!! "+current;
  }
  changeColor(){
   this.boxStyle['backgroundColor']= this.bgcolor;
  }

  handleNotify(data,index){
    this.info=data;
    this.products[index].push(data);
  }
}
