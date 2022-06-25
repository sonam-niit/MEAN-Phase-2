import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  products=[
    {"id":1,"name":"pencil","price":12.10,"available":"23-06-2022","rating":4.5},
    {"id":2,"name":"Pen","price":15.60,"available":"24-06-2022","rating":4.6},
    {"id":3,"name":"scale","price":20.10,"available":"23-06-2022","rating":4.5},
    {"id":4,"name":"Eraser","price":2.5,"available":"23-06-2022","rating":4.3}
  ]

  getProducts(){
    return this.products;
  }
}
