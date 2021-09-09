import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataStoreService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  /**
   * This is a constructor of AppHeaderComponent.
   * @param {AuthService} auth 
   * @param {DataStoreService} data 
   * @param {Router} router 
   */
  constructor(private auth: AuthService, private data: DataStoreService, private router: Router) { }

  user = new User("", "", "", false);

  /**
   * onInit getUserInfo() is called to get the details of the signedin user.
   * if the user is logged in it hides the sign in and signout links and shows
   * addProduct, viewProduct, logout nav links and vice versa.
   */
  ngOnInit(): void {
    this.auth.getUserInfo().subscribe((user: User) => {
      if (!user) {
        this.user = new User("", "", "", false);;
        return;
      }
      this.user = user;
    });
  }

  /**
   * This calls the logout() of AuthService which logouts the user.
   */
  public logout() {
    this.auth.logout();
  }

}