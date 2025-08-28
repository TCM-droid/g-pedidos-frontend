import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../features/produtos/entidades/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {}

  private baseUrl = environment.apiUrl;

  buscaTodosProdutos(){
    return this.http.get(`${this.baseUrl}/produtos/`);
  }

  cadastrarProduto(produtoNovo: Produto){
    produtoNovo.moeda = 'BRL'
    return this.http.post(`${this.baseUrl}/produtos/`, produtoNovo);
  }
}
