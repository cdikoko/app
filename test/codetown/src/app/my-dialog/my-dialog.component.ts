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
  user : User
  constructor(public login : LoginServiceService) { }

  ngOnInit() {
  }

  onSubmit(form: Form){
    console.log(form);
  }

  verifyLogin(){
    this.login.getUser(this.user).subscribe(data => {
      console.log(data);
    }, 
    
    )
  }

  testStuff(){
    console.log(this.login.test());
   return this.login.test();
  }

}
