import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  user={"id":12,"name":"sonam", "email":"sonam@gmail.com"}
  ngOnInit(): void {
  }

}
