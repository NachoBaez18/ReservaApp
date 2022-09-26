import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DiasHabilitados } from '../moldels/dias-habilitados';
import { Servicios } from '../moldels/servicios';

const API = environment.api;
@Injectable({
  providedIn: 'root'
})
export class ServiciosPeluqueriaService {

  token: string =localStorage.getItem('user-admin-token') || null;
  constructor(private http:HttpClient) { }

  public async get() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+this.token);
    return new Promise(resolve => {
      this.http.get(`${API}/reservation/services/`, { headers}).subscribe(
        (response: any) => {
          resolve(response);
        },
        error => {
          resolve(error.error);
        }
      );
    });
  }
  public async registrar(data:Servicios) {
    console.log(data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+this.token);;
    return new Promise(resolve => {
      this.http.post(`${API}/reservation/services/`, data, { headers: headers }).subscribe(
        (response: any) => {
          resolve(response);
        },
        error => {
          resolve(error.error);
        }
      );
    });
  }

}
