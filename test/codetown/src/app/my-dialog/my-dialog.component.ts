import { Component, OnInit } from '@angular/core';
import {FormsModule, Form} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginServiceService } from '../login-service.service';
import { User } from '../models/User';
import { error } from 'util';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  user: any [] = []
  constructor(public login : LoginServiceService) { }

  ngOnInit() {

  }

  onSubmit(form: Form){
    console.log(form);
  }

  getUser(){
    this.login.getAllUsers().subscribe(data => {
     this.user.push(data);
    }, 
    
    )
  }

  

}
