import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user=new User("","","",false);

  /**
   * This is the constructor of SigninComponent
   * @param {AuthService} auth is injected to use its signupUser() function.
   * @param {Router} router is injected to navigate programmatically.
   */
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * It calls the signupUser() of AuthService to signup user.
   */
  onSignup(){
    this.auth.signupUser(this.user.username, this.user.password);
  }

}
