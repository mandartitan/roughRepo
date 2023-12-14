import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule  } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { MyAppComponent } from './my-app/my-app.component';
import { AddDetailsComponent } from './appDetails/add-details/add-details.component';
import { ViewDetailsComponent } from './appDetails/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    AddDetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
