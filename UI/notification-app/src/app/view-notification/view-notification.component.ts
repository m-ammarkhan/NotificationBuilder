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
  constructor(private dataService: DataStoreService, private notificationService: NotificationToastService) { }
  public notifications: any = [];

  product: any;
  valueOfSearch = '';
  check = false;
  checkFetch = false;
  selected = '';
  hideloader() {

    // Setting display of spinner
    // element to none
    (<HTMLInputElement>document.getElementById("loading")).style.display = 'none';

  }
  ngOnInit(): void {
    // this.dataService.getListItems().subscribe(res => {
    //   this.checkFetch = true;
    //   res.docs.forEach(doc => {
    //     const tempProd: any = doc.data();
    //     this.notifications.push({ ...tempProd, id: doc.id });
    //     console.log(this.notifications);
    //   });
    // });
    this.dataService.getListItems().subscribe(res => {
      this.notifications=res;
      console.log(this.notifications);
      this.checkFetch = true;
      //const tempProd: any = res.data;
      //this.notifications =res.valueOf(.);
      //console.log(this.notifications);
    });
  }
  // viewProdDetail(id: any) {
  //   this.dataService.getItemByID(id).subscribe(res => {
  //     const tempProd: any = res.data();

  //     this.product = { ...tempProd, id: res.id };
  //     this.check = true;
  //   });
  //   window.scroll(0, 0);

  // }
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
  deleteProd(searchObj: any) {
    alert("Deleting Product with id: " + searchObj);
    this.dataService.deleteItemByID(searchObj);
    this.check = false;
    this.valueOfSearch = '';
    this.ngOnInit();
    //notificationEdit
  }

}
