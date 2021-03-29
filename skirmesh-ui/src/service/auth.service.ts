import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:  HttpClient) { }

  createUser(){
    this.http.get('http://api.skirmesh.net/resources'+'/users')
  }
}
