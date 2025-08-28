import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full',
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./features/pedidos/pedidos-listar/pedidos-listar').then((m) => m.PedidosListar),
  },
  {
    path: 'pedidos/novo',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/pedidos/pedidos-form/pedidos-form').then((m) => m.PedidosForm),
  },
  {
    path: 'pedidos/:id',
    loadComponent: () =>
      import('./features/pedidos/pedidos-form/pedidos-form').then((m) => m.PedidosForm),
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./features/produtos/produto-listar/produto-listar').then((m) => m.ProdutoListar),
  },
  {
    path: 'produtos/novo',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/produtos/produto-form/produto-form').then((m) => m.ProdutoForm),
  },
  {
    path: 'produtos/:id',
    loadComponent: () =>
      import('./features/produtos/produto-form/produto-form').then((m) => m.ProdutoForm),
  },
  {
    path: 'relatorios',
    loadComponent: () =>
      import('./features/relatorios/relatorios-page/relatorios-page').then((m) => m.RelatoriosPage),
  }
];
