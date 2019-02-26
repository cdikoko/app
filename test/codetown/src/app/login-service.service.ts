import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = "notgoogle";
  constructor(public http: HttpClient) { }
  
  getUser(user: User):Observable<any>{
    return  this.http.get(this.url);
  }

  test(){
    return "Hello test, this is only a test";
  }

}
