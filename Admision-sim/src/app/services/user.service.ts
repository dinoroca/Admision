import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  registro_user(data: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post(this.url + 'registro_user', data, {headers : headers});
  }

  login_user(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login_user', data, {headers : headers});
  }

  obtener_user(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_user/' + id, {headers : headers});
  }
}
