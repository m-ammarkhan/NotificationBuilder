import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationToastService } from 'notification-toastr';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataStoreService } from '../data.service';
import { Notification } from '../notification.model';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  //@Output() public prodToEmit = new EventEmitter<any>();
  notification = new Notification("","", "", "",false,4000,"");
  formValid = false;
  titleValid = false;
  msgValid = false;
  priceValid = false;
  quantityValid = false;
  constructor(private dataService: DataStoreService, private toastr: NotificationToastService, private router: Router, private auth: AuthService) { }
  //user = new User("", "", "", false);
  ngOnInit(): void {
    
  }

  checkit() {
    if (this.notification.title != "") {
      this.titleValid = false;

    }
    else if (this.notification.title == "") {
      this.titleValid = true;

    }
    if (this.notification.msg != "") {
      this.msgValid = false;

    }
    else {
      this.msgValid = true;
    }
  }
  onSubmit() {
    
    if (!(this.notification.title == "" || this.notification.msg == "")) {
      //this.prodToEmit.emit(this.notification);
      this.formValid = true;
      //console.log(this.notification);
      this.dataService.addToList(this.notification);
      this.notification = new Notification("","", "", "",false,4000,"");
      //this.router.navigate(['/viewNotifications']);
      
    }
    else {
      this.toastr.sendError("Data you entered is Invalid.", "Error!");
      if (this.notification.title == "") {
        this.formValid = true;
        this.titleValid = true;


      }
      if (this.notification.msg == "") {
        this.formValid = true;
        this.msgValid = true;

      }
    }

  }


}
