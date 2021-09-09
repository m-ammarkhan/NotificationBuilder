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

  notification = new Notification("", "", "", "", false, 4000, "");
  formValid = false;
  titleValid = false;
  msgValid = false;
  priceValid = false;
  quantityValid = false;

  /**
   * This is the constructor of AddNotificationComponent.
   * @param {DataStoreService} dataService it is injected to use its addToList().
   * @param {NotificationToastService} toastr it is injected to uses notifications to notify user. 
   * @param {Router} router it is injected to navigate programmatically. 
   * @param {AuthService} auth it is injected to use its services. 
   */
  constructor(private dataService: DataStoreService, private toastr: NotificationToastService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  /**
   * This is called when ngModelChange is triggered. It validates the inputs against 
   * the set of conditions on every ngModelChange.
   */
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

  /**
   * This is called when user pressed Submit button. It calls the addToList()
   * function of DataService to add the product.
   */
  onSubmit() {
    if (!(this.notification.title == "" || this.notification.msg == "")) {
      this.formValid = true;
      this.dataService.addToList(this.notification);
      this.notification = new Notification("", "", "", "", false, 4000, "");
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
