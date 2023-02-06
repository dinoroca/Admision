import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { JwtHelperService } from "@auth0/angular-jwt";

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

  //ADMIN
  listar_usuarios_filtro_admin(tipo: any, filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_usuarios_filtro_admin/'+tipo+'/'+filtro, {headers : headers});
  }

  obtener_user_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_user_admin/' + id, {headers : headers});
  }

  actualizar_user_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_user_admin/' + id, data, {headers : headers});
  }

  eliminar_user_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_user_admin/' + id, {headers : headers});
  }
  

  //USER
  registro_user(data: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post(this.url + 'registro_user', data, {headers : headers});
  }

  login_user(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login_user', data, {headers : headers});
  }

  public isAutenticatedUser(): Boolean {
    
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);
      
      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }
      
      if (!decodedToken) {
        //console.log('No es valido');
        localStorage.clear();
        return false;
      }
    } catch (error) {
      localStorage.clear();
      return false;
    }
    
    return true;
  }

  public isAutenticatedAdmin(): Boolean {
    
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);
      
      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }
      
      if (!decodedToken) {
        //console.log('No es valido');
        localStorage.clear();
        return false;
      }

      if (decodedToken.role !== 'ADMIN') {
        return false;
      }

    } catch (error) {
      localStorage.clear();
      return false;
    }
    
    if (decodedToken.role == 'ADMIN') {
      return true;
    }

    return true;
  }

  obtener_user(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_user/' + id, {headers : headers});
  }

  //Obtener universidades y areas
  obtener_universidades(): Observable<any> {
    return this._http.get('./assets/universidades.json');
  }

  obtener_areas(): Observable<any> {
    return this._http.get('./assets/areas.json');
  }

  obtener_escuelas(): Observable<any> {
    return this._http.get('./assets/escuelas.json');
  }
}
