import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = "http://localhost:8080/api";
  constructor(public http: HttpClient) { }
  
  getUser(user: User): Observable<any>{
    return  this.http.get(this.url + '/1');
  }

  getAllUsers(): Observable<any> {
  return this.http.get(this.url + '/users');
  }
}
