import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { Pedido } from '../entidades/Pedido';
import { PedidosService } from '../../../servicos/pedidos-service';

@Component({
  selector: 'app-pedidos-listar',
  imports: [MatPaginatorModule, MatPaginator, MatTableModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './pedidos-listar.html',
  styleUrl: './pedidos-listar.css'
})
export class PedidosListar implements AfterViewInit, OnInit{

  constructor(private pedidosService: PedidosService) {}

  tituloColunas: string[] = ['dataPedido', 'nomeConsumidor', 'totalPedido'];
  dataSource = new MatTableDataSource<Pedido>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pedidos: any;

  ngOnInit(): void {
    this.pedidosService.buscaTodosPedidos().subscribe(
          (response) => {
            this.pedidos = response;
            this.dataSource.data = this.pedidos;
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
