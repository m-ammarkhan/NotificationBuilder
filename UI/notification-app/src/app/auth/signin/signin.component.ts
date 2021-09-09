import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user=new User("","","",false);

  /**
   * This is the constructor of SigninComponent
   * @param {AuthService} auth is injected to use its signinUser() function.
   * @param {Router} router is injected to navigate programmatically.
   */
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * It calls the signinUser() of AuthService to signin user.
   */
  onSignin(){
    this.auth.signinUser(this.user.username, this.user.password);
  }
}
