import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/data.service';
import { Notification } from 'src/app/notification.model';

@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.css']
})
export class NotificationEditComponent implements OnInit {
  notification : any
  constructor(private route: ActivatedRoute,private dataService: DataStoreService) { }
  updateForm = new FormGroup({
    title: new FormControl(''),
    msg: new FormControl(''),
    type: new FormControl(''),
  });
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const notificationIdFromRoute = String(routeParams.get('notificationId'));
    this.dataService.getItemByID(notificationIdFromRoute).subscribe(res => {
      this.notification=res;
      this.updateForm= new FormGroup({
        title: new FormControl(this.notification.title),
        msg: new FormControl(this.notification.msg),
        type: new FormControl(this.notification.type),
        show: new FormControl(this.notification.show),
        timeout: new FormControl(this.notification.timeout),
        username:new FormControl(this.notification.username)
      });
      console.log(this.notification);
    });
    
  }
  onSubmit() {
    this.dataService.updateItemById(this.notification._id,this.updateForm.value);
  }

  
}
