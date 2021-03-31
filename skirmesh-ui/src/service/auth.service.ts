import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:  HttpClient) { }
  // option={

  // }
  headers =new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };
    
  createUser(data){
    return this.http.post('http://api.skirmesh.net/resources'+'/users',data,this.options)
  }

  userLogin(data){
    return this.http.post('http://api.skirmesh.net'+'/login',data,this.options)
  }
}
