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
import { HomeComponent } from './home/home.component';
import { NavbarService } from './services/navbar/navbar.service';
import { MaterialModule } from './models/Material';
const appRoutes: Routes =   [{
        path: '',
        component: LoginComponent
      },
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ];
@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
    imports:[
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes
  )],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule] 
  ,
  entryComponents: [
    MyDialogComponent
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
