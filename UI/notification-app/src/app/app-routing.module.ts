import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotificationEditComponent } from './view-notification/product-edit/notification-edit.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addNotification', component: AddNotificationComponent },
  { path: 'viewNotifications', component:ViewNotificationComponent},
  { path: 'notificationEdit/:notificationId', component: NotificationEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
