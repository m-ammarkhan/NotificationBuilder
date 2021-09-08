import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NotificationToastService } from 'notification-toastr';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';
import { Notification } from './notification.model';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {


    REST_API: string = 'http://localhost:8080/api/notifications';
    //httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private toastr: NotificationToastService, private firestore: AngularFirestore, private route: Router, private auth: AuthService, private httpClient: HttpClient) {
        this.auth.getUserInfo().subscribe((user: User) => {

            this.user = user;


        });
    }

    user = new User("", "", "", false);
    username = "";
    addToList(notification: Notification) {
        notification.username = this.user.username;
        this.httpClient.post(this.REST_API, notification).subscribe(
            (res) => {
                this.toastr.sendSuccess('Notification Added Successfully!', 'Success');
                this.route.navigate(['viewNotifications']);
            },
            (err) => {
                this.toastr.sendError('Notification Not Added!', 'Error');
            }
        );
        // this.firestore.collection("notification").add({
        //     title: notification.title,
        //     type: notification.type,
        //     msg: notification.msg,
        //     show: notification.show,
        //     timeout: notification.timeout,
        //     username: this.user.username

        // });
        //
    }

    getListItems() {
        // return this.firestore
        //     .collection("notification").get();
        return this.httpClient.get(this.REST_API+"/user/"+this.user.username);
        //return this.firestore.collection("notification", ref=>ref.where('username', '==', this.user.username)).get();
    }

    getItemByID(id: any) {
        return this.httpClient.get(this.REST_API + "/" + id);
        //this.firestore.collection('notification').doc(id).get();
    }

    deleteItemByID(id: any) {
        // this.firestore.collection('notification').doc(id).delete().then(
        //     (res) => {
        //         this.toastr.sendSuccess('Record Deleted Successfully!', 'Success');
        //         window.location.reload();
        //     }
        // ).catch(
        //     (err) => {
        //         this.toastr.sendError('Record Deletion UnSuccessfull!', 'Error');
        //     }
        // );
        this.httpClient.delete(this.REST_API + "/" + id).subscribe(
            (res) => {
                this.toastr.sendSuccess('Record Deleted Successfully!', 'Success');
                let currentUrl = this.route.url;
                this.route.routeReuseStrategy.shouldReuseRoute = () => false;
                this.route.onSameUrlNavigation = 'reload';
                this.route.navigate([currentUrl]);
                //console.log(res);
            },
            (err) => {
                this.toastr.sendError('Record Deletion UnSuccessfull!', 'Error');
            }
        );
    }

    updateItemById(id: any, notification: Notification) {

        this.httpClient.put(this.REST_API + "/" + id, notification).subscribe(
            (res) => {
                this.toastr.sendSuccess('Record Updated Successfully!', 'Success');
                this.route.navigate(['/viewNotifications']);
                window.scroll(0, 0);
            },
            (err) => {
                this.toastr.sendError('Record Updation UnSuccessfull!', 'Error');
            }
        );
        // this.firestore.collection("notification").doc(id).update({
        //     title: notification.title,
        //     type: notification.type,
        //     msg: notification.msg,
        //     show: notification.show,
        //     timeout: notification.timeout,
        //     username: notification.username
        // });
        // this.toastr.sendSuccess('Record Updated Successfully!', 'Success');
        // this.route.navigate(['/viewNotifications']);
        // window.scroll(0, 0);

    }
}