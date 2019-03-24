import { Component, OnInit } from '@angular/core';

import {MatButton, MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../models/User';
import { MaterialModule } from '../models/Material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

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
      this.user = result;
      console.log(this.user)
    });

  
  }
}
