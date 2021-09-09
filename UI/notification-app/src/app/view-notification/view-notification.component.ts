import { Component, OnInit } from '@angular/core';
import { NotificationToastService } from 'notification-toastr';
import { User } from '../auth/user.model';
import { DataStoreService } from '../data.service';
import { Notification } from '../notification.model';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {
  
  /**
   * This is the contructor of ViewNotificationComponent.
   * @param {DataStoreService} dataService is injected to use its getListItems().
   * @param {NotificationToastService} notificationService is injected to use notification-toast to notify user.
   */
  constructor(private dataService: DataStoreService, private notificationService: NotificationToastService) { }
  
  public notifications: any = [];
  product: any;
  valueOfSearch = '';
  check = false;
  checkFetch = false;
  selected = '';

  /**
   * This function hides the loader.
   */
  hideloader() {
    (<HTMLInputElement>document.getElementById("loading")).style.display = 'none';
  }

  /**
   * onInit getListItems() is called to fetch all the notification added by signedin user. 
   */
  ngOnInit(): void {
    this.dataService.getListItems().subscribe(res => {
      this.notifications=res;
      console.log(this.notifications);
      this.checkFetch = true;
    });
  }

  /**
   * This calls when user presses eye button it triggers the notification which was passed.
   * @param {Notification} notifcation is passed to know notification type, its msg and title.
   */
  showNotification(notifcation: Notification) {
    if (notifcation.type === "info") {
      this.notificationService.sendInfo(notifcation.msg, notifcation.title);
    }
    if (notifcation.type === "error") {
      this.notificationService.sendError(notifcation.msg, notifcation.title);
    }
    if (notifcation.type === "warning") {
      this.notificationService.sendWarning(notifcation.msg, notifcation.title);
    }
  }

  /**
   * This is used to delete the notification having the provided id.
   * @param {any} id is used passed to tell that notification with this id must be deleted.
   */
  deleteProd(id: any) {
    alert("Deleting Product with id: " + id);
    this.dataService.deleteItemByID(id);
    this.check = false;
    this.valueOfSearch = '';
    this.ngOnInit();
  }
}
