import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-login-crud',
  templateUrl: './tela-login-crud.component.html',
  styleUrls: ['./tela-login-crud.component.css']
})

export class FormTelaCrudLogin {
  constructor(private router: Router){

  }

avancarList():void{
  this.router.navigate(['listUsuarioCrud']);
}

}

