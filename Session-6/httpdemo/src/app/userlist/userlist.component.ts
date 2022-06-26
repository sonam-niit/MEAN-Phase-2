import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:UserService) { }
  users:User[]=[];
  ngOnInit(): void {

    this.service.getAllUsers().subscribe(result=>this.users=result);
  }

}
