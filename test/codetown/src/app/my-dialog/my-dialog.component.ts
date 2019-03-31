import { Component, OnInit } from '@angular/core';
import {FormsModule, Form} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../models/User';
import { error } from 'util';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  user:User=new User();
  username = "";
  password="";
  constructor(private router: Router,public login: LoginServiceService) { }
  
  ngOnInit() {
    
  }
  
  onSubmit(form: Form){
    this.getUser();
  }
  
  getUser(){
    this.login.getUser(this.username).subscribe(data => {
      this.user = new User (this.username,this.password);
      if(this.user.username===data.username){
        console.log("yes")
        if(this.user.password===data.password){
          this.router.navigate(['Home']);
        }

      }
    },
    error=>{
      console.log("error")
    }
    )
  
  }


}
