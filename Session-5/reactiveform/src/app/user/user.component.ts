import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:UserService) { }

  products:any[]=[];
  ngOnInit(): void {
    this.products= this.service.getProducts();
  }

}
