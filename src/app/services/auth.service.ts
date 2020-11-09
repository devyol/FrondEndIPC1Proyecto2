import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://ipc1-backend-flask.herokuapp.com'

  constructor(private http: HttpClient, private router:Router) { }

  signUp(user){
    return this.http.post<any>(this.URL + '/register',user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/login',user)
  }

  loggerIn(){
    return !!localStorage.getItem('token');
  }

  getUser(){
    return localStorage.getItem('usuario')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getRol(){
    return localStorage.getItem('rol')
  }

  getAdmin(){
    if(localStorage.getItem('rol')=='admin'){
      return true
    }else{
      return false
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    this.router.navigate(['/home'])
  }

  recuperarPassword(user){
    return this.http.post<any>(this.URL + '/recuperarcontrasenia',user);
  }

}
