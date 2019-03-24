import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar/navbar.service';
import { User } from '../models/User';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username="";
  balance=0;
  constructor(private account: AccountService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();

  }

  getBalance(username: String){

    this.account.getBalance(username).subscribe(data=>{
      this.balance = data;
    });
  }
}
