import { Component, OnInit } from '@angular/core';

import {MatButton, MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(public dialog: MatDialog, private login: LoginServiceService) { }

  ngOnInit() {
    this.login.getAllUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
