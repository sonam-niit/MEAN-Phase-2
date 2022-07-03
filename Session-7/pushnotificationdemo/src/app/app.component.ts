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
  //to work with push notification let's create a fuction
  myFunction(){
    const title="Offer";

    const option= new PushNotificationOptions(); //create object

    option.body="check out our new Offers for the MEAN stack";

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
