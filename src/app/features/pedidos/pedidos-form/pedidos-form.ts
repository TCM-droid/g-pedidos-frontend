import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PedidosService } from '../../../servicos/pedidos-service';
import {MatListModule} from '@angular/material/list';
import { ProdutosService } from '../../../servicos/produtos-service';

@Component({
  selector: 'app-pedidos-form',
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, FormsModule],
  templateUrl: './pedidos-form.html',
  styleUrl: './pedidos-form.css'
})
export class PedidosForm implements OnInit{
  pedidoForm: FormGroup;
  produtos: any;
  trackProdutos: Map<string, string> = new Map();
  produtosSelecionados: string[] = [];


  constructor(private form: FormBuilder, private pedidosService: PedidosService, private router: Router, private produtosService: ProdutosService) {

    this.pedidoForm = this.form.group({
      nomeConsumidor: ['', [Validators.required, Validators.minLength(2)]],
      produtosSelecionados: new FormControl([])
    });
  }
  ngOnInit(): void {
    this.produtosService.buscaTodosProdutos().subscribe(
          (response) => {
            this.produtos = response;
          },
          (error) => {
            console.error(error);
          }
        );
  }

  trackQuantidade(event: any, produto: any) {
    const value = (event.target as HTMLInputElement).value;
    produto['qtd'] = value
    this.trackProdutos.set(produto.sku, produto);
  }

  salvar() {
    if(this.pedidoForm.valid){

        let pedido = this.pedidoForm.value;
        pedido.dataPedido = new Date();
        pedido.produtos = [];
        for (const sku of this.pedidoForm.value.produtosSelecionados) {
          let produto:any = this.trackProdutos.get(sku);
          if(produto === undefined) continue;
          pedido.produtos.push({
            "moeda": "BRL",
            "quantidade": produto['qtd'],
            "produto": produto
          });
        }

        this.pedidosService.cadastrarPedido(this.pedidoForm.value).subscribe({
          next: (response) => {
            this.router.navigate(['/', 'pedidos']);
          },
          error: (error) => {
            console.log(error);
          }
        });
    }
  }
}
