import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotificationToastService } from 'notification-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('state', [
      state('normal', style(
        {
          'display': 'none',
          'background-color': 'teal',
          'color': 'white',

          transform: 'translateX(0) scale(1)'
        }
      )),
      state('highlighted', style(
        {
          'display': 'block',
          'background-color': 'transparent',

          transform: 'translateX(0) scale(1)'
        }
      )),
      transition('normal => highlighted', animate(800)),
      transition('highlighted => normal', animate(1000)),
    ])
  ]
})
export class HomeComponent implements OnInit {

  /**
   * This is the constructor of HomeComponent
   * @param {NotificationToastService} notificationService is injected to use notification-toast to notify user.
   */
  constructor(private notificationService: NotificationToastService) { }

  ngOnInit(): void {
  }

  state = 'normal';
  wildState = 'normal2';
  showOn = false;
  showOff = true;
  status = "";

  /**
   * This funtion is bind to an event which is triggered when user presses ON button.
   * It changes the status to ON.
   * It changes showOn from false to true.
   * It changes showOff from true to false.
   */
  onit(): void {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.status = "ON";
    this.showOn = true;
    this.showOff = false;
  }

  /**
   * This funtion is bind to an event which is triggered when user presses OFF button.
   * It changes the status to OFF.
   * It changes showOff from false to true.
   * It changes showOn from true to false.
   */
  offit(): void {
    this.state == 'highlighted' ? this.state = 'normal' : this.state = 'highlighted';
    this.status = "OFF";
    this.showOff = true;
    this.showOn = false;
  }

  /**
   * It triggers the notification of type Success.
   */
  onSuccess() {
    this.notificationService.sendSuccess("Success Type", "Showing Success Message");
  }

  /**
   * It triggers the notification of type Info.
   */
  onInfo() {
    this.notificationService.sendInfo("Info Type", "Showing Info Message");
  }

  /**
   * It triggers the notification of type Warning.
   */
  onWarning() {
    this.notificationService.sendWarning("Warning Type", "Showing Warning Message");
  }

  /**
   * It triggers the notification of type Error.
   */
  onError() {
    this.notificationService.sendError("Error Type", "Showing Error Message");
  }

}
