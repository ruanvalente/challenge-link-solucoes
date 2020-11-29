import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { PeopleRegistrationComponent } from './people-registration/people-registration.component';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { NavBarComponent } from './shared/component/nav-bar/nav-bar.component';
import { LoadingComponent } from './shared/component/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleRegistrationComponent,
    PeopleHomeComponent,
    PeopleEditComponent,
    NavBarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
