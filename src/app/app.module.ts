import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    ProfilePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
