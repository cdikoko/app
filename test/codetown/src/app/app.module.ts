import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentsComponent } from './investments/investments.component';
@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    NavbarComponent,
    LoginComponent,
    InvestmentsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home',
        component: LoginComponent
      },
      {
        path: 'contact',
        component: LoginComponent
      },
      {
        path: 'about',
        component: LoginComponent
      },      
      { path: 'invest', 
        component: InvestmentsComponent
      }
    ])
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
