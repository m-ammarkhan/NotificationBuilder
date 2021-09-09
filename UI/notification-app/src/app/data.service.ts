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

    /**
     * This is the constructor of DataStoreService.
     * @param {NotificationToastService} toastr is injected to use notification-toast to notify user.
     * @param {AngularFirestore} firestore is injected 
     * @param {Router} route is injected to navigate programmatically.
     * @param {AuthService} auth is injected to use its getUserInfo().
     * @param {HttpClient} httpClient is injected to make http calls.
     */
    constructor(private toastr: NotificationToastService, private firestore: AngularFirestore, private route: Router, private auth: AuthService, private httpClient: HttpClient) {
        this.auth.getUserInfo().subscribe((user: User) => {
            this.user = user;
        });
    }

    user = new User("", "", "", false);

    /**
     * it makes post call to the API to add provided Notification
     * @param {Notification} notification is passed to post it.
     */
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
    }

    /**
     * It gets the list of notifications from the Api which are added by the current user.
     * @returns the list of notifications.
     */
    getListItems() {
        return this.httpClient.get(this.REST_API + "/user/" + this.user.username);

    }

    /**
     * It gets the notification having the provided id.
     * @param {any} id is passed to search the notication having this id. 
     * @returns the notification having the provided id.
     */
    getItemByID(id: any) {
        return this.httpClient.get(this.REST_API + "/" + id);
    }

    /**
     * It makes the delete request to an API. To delete the notifiction having the provided id.
     * @param {any} id is passed to search the notification having this id.
     */
    deleteItemByID(id: any) {
        this.httpClient.delete(this.REST_API + "/" + id).subscribe(
            (res) => {
                this.toastr.sendSuccess('Record Deleted Successfully!', 'Success');
                let currentUrl = this.route.url;
                this.route.routeReuseStrategy.shouldReuseRoute = () => false;
                this.route.onSameUrlNavigation = 'reload';
                this.route.navigate([currentUrl]);
            },
            (err) => {
                this.toastr.sendError('Record Deletion UnSuccessfull!', 'Error');
            }
        );
    }

    /**
     * It makes the PUT request to an API. To Update the notifiction having the provided id with the provided data.
     * @param {any} id is passed to search the notification having this id.
     * @param {Notification} notification is passed to update the notification with these notification details.
     */
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
    }
}