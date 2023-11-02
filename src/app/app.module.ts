import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormCadastro2Component } from './components/form-cadastro2/form-cadastro2.component';
import { FormCadastro3Component } from './components/form-cadastro3/form-cadastro3.component';
import { FormEsqueciMinhaSenhaComponent } from './components/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FormLoginComponent,
    FormCadastroComponent,
    FormCadastro2Component,
    FormCadastro3Component,
    FormEsqueciMinhaSenhaComponent,
    [FormLoginComponent],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
