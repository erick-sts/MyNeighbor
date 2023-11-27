import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router){
    this.loginFormGroup = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required]
    })
  }

  login(){
    if(!this.loginFormGroup.valid){
      alert("Erro! Preencha os campos corretamente.")
      return;
    }else{
      const formData = this.loginFormGroup.value;
      console.log(formData);
      this.router.navigate(['mapa'])
    }
  }
}
