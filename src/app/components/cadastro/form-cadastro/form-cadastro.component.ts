import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    });
  }

  avancarParaProximaPagina(): void {
    if (this.formulario.valid) {
      // Todos os campos são válidos, redirecione para a próxima página
      this.router.navigate(['/cadastro/parte2']);
    } else {
      // Marca todos os campos como tocados para que os erros sejam exibidos
      this.marcarCamposComoTocados();
      // Exiba uma mensagem de erro ou trate de outra forma campos inválidos
      alert('Preencha todos os campos obrigatórios antes de avançar.');
    }
  }

  marcarCamposComoTocados(): void {
    Object.values(this.formulario.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
