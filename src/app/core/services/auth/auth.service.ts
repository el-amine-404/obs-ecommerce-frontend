import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;
  roles : any;
  username : any;
  accessToken !: string;


  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public login(username: string, password: string){

    // let options = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
    // let params = new HttpParams().set('username', username).set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }

    let body = {
      username: username,
      password: password
    };

    return this.http.post('http://localhost:8082/auth/login',JSON.stringify(body), options);
  }

  loadProfile(data: any){
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];

    this.localStorageService.setItem('access-token', this.accessToken);

    // i have added any type to jwtDecode in order to avoid compilation error
    // another approach is to create type/interface with the properties that we need
    let decodedJwt = jwtDecode<any>(this.accessToken);

    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }
}
