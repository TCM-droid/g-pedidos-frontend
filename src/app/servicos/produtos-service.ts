import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {}

  private baseUrl = environment.apiUrl;

  buscaTodosProdutos(){
    return this.http.get(`${this.baseUrl}/produtos/`);
  }
}
