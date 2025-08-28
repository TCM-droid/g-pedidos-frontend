import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../entidades/Produto';
import { ProdutosService } from '../../../servicos/produtos-service';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-produto-listar',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './produto-listar.html',
  styleUrl: './produto-listar.css'
})
export class ProdutoListar implements OnInit, AfterViewInit {

  constructor(private produtosService: ProdutosService) {}

  tituloColunas: string[] = ['SKU', 'Nome', 'Descrição', 'Preço'];
  dataSource = new MatTableDataSource<Produto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  produtos: any;

  ngOnInit(): void {
    this.produtosService.buscaTodosProdutos().subscribe(
          (response) => {
            this.produtos = response;
            this.dataSource.data = this.produtos;
          },
          (error) => {
            console.error(error);
          }
        );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
