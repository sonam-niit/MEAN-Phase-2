import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataint',
  templateUrl:'./dataint.component.html',
  styleUrls: ['./dataint.component.css']
})
export class DataintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url:string="https://www.google.com";
  imgurl:string="./assets/images/test.png";
  h:number=250;
  w:number=400;
  message:string="Welcome to the World of Binding";
  flag:boolean=false;
  show(){
    this.flag=!this.flag;
  }
  username:string="anyname";
}
