import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListar } from './pedidos-listar';

describe('PedidosListar', () => {
  let component: PedidosListar;
  let fixture: ComponentFixture<PedidosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
