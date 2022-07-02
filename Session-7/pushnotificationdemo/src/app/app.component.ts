import { Component } from '@angular/core';
import { PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pushnotificationdemo';

  constructor(private service: PushNotificationService){}

  ngOnInit(){
      this.service.requestPermission();
      //requst user for permission
  }
}
