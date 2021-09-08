import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getIdToken } from "firebase/auth";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NotificationToastService } from 'notification-toastr';

@Injectable()
export class AuthService {
  token = "";
  auth = getAuth();
  public userSubject = new Subject<User>();
  public isSignedin = false;
  constructor(private router: Router, private firestore: AngularFirestore, private toastr: NotificationToastService) { }
  getUserInfo(): Observable<User> {
    return this.userSubject.asObservable();
  }
  signupUser(email: string, password: string) {
    let tempUser = new User(email, password, "", false);
    createUserWithEmailAndPassword(this.auth, email, password).then(

      (res) => {
        res.user.getIdTokenResult().then(
          (res) => {
            tempUser.token = res.token;
            tempUser.isLoggedin = true;
            this.userSubject.next(tempUser);
          }
        );
        this.toastr.sendSuccess("User Created Successfully", "Success");
        this.router.navigate(['/']);
      }
    );
  }

  signinUser(email: string, password: string) {
    let tempUser = new User(email, password, "", false);
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (res) => {
        res.user.getIdTokenResult().then(
          (res) => {
            tempUser.token = res.token;
            tempUser.isLoggedin = true;
            this.userSubject.next(tempUser);
          }
        );
        this.toastr.sendSuccess("User signed in Successfully", "Success");
        this.router.navigate(['/']);
      }
    );

  }

  logout() {
    signOut(this.auth).then(
      ()=>{
        this.token = "";
        this.isSignedin = false;
        this.userSubject.next();
        this.toastr.sendSuccess("Loggout Successfull", "Success");
        this.router.navigate(['/signin']);
      }
    );
    

  }

  // getToken(user:User) {
  //   getIdToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }

  isAuthenticated() {
    return this.token != "";
  }
}
