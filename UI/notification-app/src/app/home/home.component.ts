import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      //transition('highlighted => normal',animate(800))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private notificationService: NotificationToastService) { }

  ngOnInit(): void {
    if (localStorage['is_signedin'] == false) {
      this.router.navigate(['/signin']);
    }
  }
  // myObservable! :Observable<Number[]>;



  // Execute with the observer object


  // Create observer object
  state = 'normal';
  wildState = 'normal2';
  showOn = false;
  showOff = true;
  status = "";
  changeStatus(): void {

    if (this.status == "ON") {

      this.status = "OFF";

    }
    if (this.status == "OFF") {
      this.status = "ON";
    }



  }
  onit(): void {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.status = "ON";
    this.showOn = true;
    this.showOff = false;

  }
  offit(): void {
    this.state == 'highlighted' ? this.state = 'normal' : this.state = 'highlighted';
    //this.wildState='shark';
    this.status = "OFF";
    this.showOff = true;
    this.showOn = false;

  }
  onSuccess(){
    this.notificationService.sendSuccess("By","Ammar");
  }
  onInfo(){
    this.notificationService.sendInfo("By","Ammar");
  }
  onWarning(){
    this.notificationService.sendWarning("By","Ammar");
  }
  onError(){
    this.notificationService.sendError("By","Ammar");
  }

}
