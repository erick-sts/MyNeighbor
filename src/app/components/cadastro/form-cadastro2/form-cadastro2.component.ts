import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-form-cadastro2',
  templateUrl: './form-cadastro2.component.html',
  styleUrls: ['./form-cadastro2.component.css']
})
export class FormCadastro2Component {
  formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      apelido: ['', Validators.required],
      cpfCnpj: ['', [Validators.required, this.validarCPF]],
      telefone: ['', Validators.required],
    });
  }

  avancarParaProximaPagina(): void {
    if (this.formulario.valid) {
      this.router.navigate(['/cadastro/parte3']);
    } else {
      this.marcarCamposComoTocados();
      alert('Preencha todos os campos obrigatórios corretamente antes de avançar.');
    }
  }

  marcarCamposComoTocados(): void {
    Object.values(this.formulario.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  validarCPF: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return { cpfInvalido: true };
    }

    function validarCPF(cpf: string): boolean {
      cpf = cpf.replace(/\D/g, '');

      if (cpf.length !== 11) {
        return false;
      }

      const digits = cpf.split('').map(Number);
      const [a, b, c, d, e, f, g, h, i, j, k] = digits;

      const soma1 = 10 * a + 9 * b + 8 * c + 7 * d + 6 * e + 5 * f + 4 * g + 3 * h + 2 * i;
      const resto1 = (soma1 * 10) % 11;
      const digito1 = resto1 === 10 || resto1 === 11 ? 0 : resto1;

      const soma2 = 11 * a + 10 * b + 9 * c + 8 * d + 7 * e + 6 * f + 5 * g + 4 * h + 3 * i + 2 * digito1;
      const resto2 = (soma2 * 10) % 11;
      const digito2 = resto2 === 10 || resto2 === 11 ? 0 : resto2;

      return digito1 === j && digito2 === k;
    }

    const cpfValido = validarCPF('123.456.789-09');
    console.log(cpfValido);

    return null;
  }
}
