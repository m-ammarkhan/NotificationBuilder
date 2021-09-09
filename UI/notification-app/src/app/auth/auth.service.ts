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

  /**
   * This is the constructor of AuthService.
   * @param {Router} router is injected to navigate programmatically.
   * @param {AngularFirestore} firestore is injected to Authenicate user, and for created user.
   * @param {NotificationToastService} toastr is injected to use notifications to notify user.
   */
  constructor(private router: Router, private firestore: AngularFirestore, private toastr: NotificationToastService) { }
  
  /**
   * This function is use to get information of logged in user.
   * @returns userSubject as an Observable.
   */
  getUserInfo(): Observable<User> {
    return this.userSubject.asObservable();
  }

  /**
   * This is use to create a user.
   * @param {string} email is passed to create user with this email.
   * @param {string} password is passed to create user with this password. 
   */
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

  /**
   * This is use to sigin the user.
   * @param {string} email is passed to sign in having this email.
   * @param {string} password is passed to sign in having this password.  
   * @returns 
   */
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

  /**
   * It is use to signs the user out.
   */
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
}
