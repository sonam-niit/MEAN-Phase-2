import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:UserService) { }

  user:User;
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.service.getUserById(Number(id)).subscribe(res=>this.user=res);
  }

}
