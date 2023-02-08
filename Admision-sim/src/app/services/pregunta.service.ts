import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  public url;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  agregar_pregunta_algebra(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.post(this.url + 'agregar_pregunta_algebra', data, {headers : headers});
  }

  listar_preguntas_filtro_algebra(filtro: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'listar_preguntas_filtro_algebra/'+filtro, {headers : headers});
  }

  obtener_pregunta_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.get(this.url + 'obtener_pregunta_algebra/' + id, {headers : headers});
  }

  actualizar_pregunta_algebra(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.put(this.url + 'actualizar_pregunta_algebra/' + id, data, {headers : headers});
  }

  eliminar_pregunta_algebra(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'authorization': token});
    return this._http.delete(this.url + 'eliminar_pregunta_algebra/' + id, {headers : headers});
  }
}
