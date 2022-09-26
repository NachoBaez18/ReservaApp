import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DiasHabilitados } from '../moldels/dias-habilitados';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class DiasHabilitadosService {

  constructor(private http:HttpClient) { }

  token: string =localStorage.getItem('user-admin-token') || null;

  public async get() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+this.token);
    return new Promise(resolve => {
      this.http.get(`${API}/reservation/get_reservation`, { headers}).subscribe(
        (response: any) => {
          resolve(response);
        },
        error => {
          resolve(error.error);
        }
      );
    });
  }

  public async registrar(data:DiasHabilitados) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+this.token);;
    return new Promise(resolve => {
      this.http.post(`${API}/reservation/generate_available_date`, data, { headers: headers }).subscribe(
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
