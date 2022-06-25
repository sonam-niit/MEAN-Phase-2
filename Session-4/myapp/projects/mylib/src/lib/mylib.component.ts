import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  template: `
    <p>
      This is Library Created By me
    </p>
  `,
  styles: [
  ]
})
export class MylibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
