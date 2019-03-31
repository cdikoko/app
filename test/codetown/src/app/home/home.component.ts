import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar/navbar.service';
import { User } from '../models/User';
import { AccountService } from '../services/account/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : any = [];
  userData: any =[];
  userDisplayedColumns : string []=['id','username', 'email']
  acc: Account;
  displayedColumns: string[] = ['id', 'balance', 'userid'];
  constructor(private account: AccountService,public nav: NavbarService) { }

  ngOnInit() {
    this.getAccounts();

  }

  getAccounts(){
    this.account.getBalance().subscribe(data=>{
     this.data = data;
    });
  }
}
