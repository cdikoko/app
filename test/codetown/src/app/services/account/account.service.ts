import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = "http://localhost:8080/api";
  constructor(public http: HttpClient) { }

  getBalance():Observable<any>{
    return this.http.get(this.url + "/account")
  }
}
