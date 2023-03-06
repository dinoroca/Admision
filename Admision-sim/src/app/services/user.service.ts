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
  listar_usuarios_filtro_admin(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_usuarios_filtro_admin/'+filtro, {headers : headers});
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

  //Resultados de prácticas de Álgebra
  registro_resultado_practicas_algebra(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_algebra', data, {headers : headers});
  }

  obtener_resultado_practicas_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_algebra/' + id, {headers : headers});
  }

  //Resultados de prácticas de Anatomía
  registro_resultado_practicas_anatomia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_anatomia', data, {headers : headers});
  }

  obtener_resultado_practicas_anatomia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_anatomia/' + id, {headers : headers});
  }

  //Resultados de prácticas de Aritmética
  registro_resultado_practicas_aritmetica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_aritmetica', data, {headers : headers});
  }

  obtener_resultado_practicas_aritmetica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_aritmetica/' + id, {headers : headers});
  }

  //Resultados de prácticas de Biología
  registro_resultado_practicas_biologia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_biologia', data, {headers : headers});
  }

  obtener_resultado_practicas_biologia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_biologia/' + id, {headers : headers});
  }

  //Resultados de prácticas de Economía
  registro_resultado_practicas_economia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_economia', data, {headers : headers});
  }

  obtener_resultado_practicas_economia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_economia/' + id, {headers : headers});
  }

  //Resultados de prácticas de Educación Cívica
  registro_resultado_practicas_ed_civica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_ed_civica', data, {headers : headers});
  }

  obtener_resultado_practicas_ed_civica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_ed_civica/' + id, {headers : headers});
  }

  //Resultados de prácticas de Física
  registro_resultado_practicas_fisica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_fisica', data, {headers : headers});
  }

  obtener_resultado_practicas_fisica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_fisica/' + id, {headers : headers});
  }

  //Resultados de prácticas de Geografia
  registro_resultado_practicas_geografia(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_geografia', data, {headers : headers});
  }

  obtener_resultado_practicas_geografia(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_geografia/' + id, {headers : headers});
  }

  //Resultados de prácticas de Geometría
  registro_resultado_practicas_geometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_geometria', data, {headers : headers});
  }

  obtener_resultado_practicas_geometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_geometria/' + id, {headers : headers});
  }

  //Resultados de prácticas de Historia del Perú
  registro_resultado_practicas_historia_peru(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_historia_peru', data, {headers : headers});
  }

  obtener_resultado_practicas_historia_peru(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_historia_peru/' + id, {headers : headers});
  }

  //Resultados de prácticas de Historia Universal
  registro_resultado_practicas_historia_universal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_historia_universal', data, {headers : headers});
  }

  obtener_resultado_practicas_historia_universal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_historia_universal/' + id, {headers : headers});
  }

  //Resultados de prácticas de Lenguaje
  registro_resultado_practicas_lenguaje(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_lenguaje', data, {headers : headers});
  }

  obtener_resultado_practicas_lenguaje(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_lenguaje/' + id, {headers : headers});
  }

  //Resultados de prácticas de Literatura
  registro_resultado_practicas_literatura(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_literatura', data, {headers : headers});
  }

  obtener_resultado_practicas_literatura(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_literatura/' + id, {headers : headers});
  }

  //Resultados de prácticas de Química
  registro_resultado_practicas_quimica(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_quimica', data, {headers : headers});
  }

  obtener_resultado_practicas_quimica(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_quimica/' + id, {headers : headers});
  }

  //Resultados de prácticas de Razonamiento Matemático
  registro_resultado_practicas_raz_matematico(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_raz_matematico', data, {headers : headers});
  }

  obtener_resultado_practicas_raz_matematico(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_raz_matematico/' + id, {headers : headers});
  }

  //Resultados de prácticas de Razonamiento Verbal
  registro_resultado_practicas_raz_verbal(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_raz_verbal', data, {headers : headers});
  }

  obtener_resultado_practicas_raz_verbal(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_raz_verbal/' + id, {headers : headers});
  }

  //Resultados de prácticas de Trigonometría
  registro_resultado_practicas_trigonometria(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'registro_resultado_practicas_trigonometria', data, {headers : headers});
  }

  obtener_resultado_practicas_trigonometria(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_resultado_practicas_trigonometria/' + id, {headers : headers});
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
