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
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSignin(){
    this.auth.signinUser(this.user.username, this.user.password);
  }
}
