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

  constructor(private auth: AuthService,private data:DataStoreService, private router: Router) { }
  user = new User("", "", "", false);


  ngOnInit(): void {
    this.auth.getUserInfo().subscribe((user: User) => {
      //this.notifications = [];  
      
      if (!user) {
        this.user = new User("", "", "", false);;
        return;
      }
      
      this.user = user;
    });
  }

  public logout() {
    this.auth.logout();
  }

}