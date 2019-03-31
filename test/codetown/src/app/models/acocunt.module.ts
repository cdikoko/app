import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AcocuntModule {
  id?: Number;
  balance?: Number;
  accountid?:Number;

  constructor(id?:Number, balance?:Number,  accountid?:Number){
    this.id = id;
    this.balance=balance;
    this.accountid=accountid;
  }

 }
