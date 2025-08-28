import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProdutosService } from '../../../servicos/produtos-service';

@Component({
  selector: 'app-produto-form',
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoForm {
  produtoForm: FormGroup;
  constructor(private form: FormBuilder, private produtosService: ProdutosService,private router: Router) {

    this.produtoForm = this.form.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      descricao: [''],
      preco: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  salvar() {
    if(this.produtoForm.valid){
      this.produtosService.cadastrarProduto(this.produtoForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/', 'produtos']);
      },
      error: (error) => {
        console.log(error);
      }
    });
    }
  }
}
