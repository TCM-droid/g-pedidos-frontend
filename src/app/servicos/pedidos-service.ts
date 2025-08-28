import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) {}

  private baseUrl = environment.apiUrl;

  buscaTodosPedidos(){
    return this.http.get(`${this.baseUrl}/pedidos/`);
  }

}
