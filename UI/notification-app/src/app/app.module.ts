import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NotificationToastrModule } from 'notification-toastr';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HomeComponent } from './home/home.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { BorderChangeOnHoverDirective } from './directives/border-change-on-hover.directive';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import { NotificationEditComponent } from './view-notification/product-edit/notification-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const config = {
  apiKey: "AIzaSyAKlLeEtJN1xZoHQ7--0Pe4hFj7JLTGD_w",
  authDomain: "notificationmanagement-b4e0e.firebaseapp.com",
  projectId: "notificationmanagement-b4e0e",
  storageBucket: "notificationmanagement-b4e0e.appspot.com",
  messagingSenderId: "899504107997",
  appId: "1:899504107997:web:3ba6f13156c4bdb1a78634",
  measurementId: "G-4F23KRLVNL"
};

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    ShortenPipe,
    AddNotificationComponent,
    BorderChangeOnHoverDirective,
    ViewNotificationComponent,
    NotificationEditComponent,
    SignupComponent,
    SigninComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NotificationToastrModule,
    AngularFireModule.initializeApp(config),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
