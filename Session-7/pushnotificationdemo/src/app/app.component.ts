import { Component } from '@angular/core';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

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
  myFunction(){
    const title="Hello";

    const option= new PushNotificationOptions();

    option.body="Native Push Notification";

    this.service.create(title,option)
    .subscribe((notif)=>{
      if(notif.event.type==="show")
      {
        console.log('On Show');
        setTimeout(()=>{notif.notification.close();},3000)
      }

      if(notif.event.click==="click")
      {
        console.log('user clicked on notification');
        notif.notification.close();
      }

      if(notif.event.type==='close')
      {
        console.log("Notification closed")
      }
    },
    err=>{console.log("Error Occured ",err)})
  }
}
