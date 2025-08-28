import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListar } from './produto-listar';

describe('ProdutoListar', () => {
  let component: ProdutoListar;
  let fixture: ComponentFixture<ProdutoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
