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
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSignup(){
    this.auth.signupUser(this.user.username, this.user.password);

    //this.router.navigate(['/signin']);
    
  }

}
