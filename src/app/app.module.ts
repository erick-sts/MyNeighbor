import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormCadastro2Component } from './components/form-cadastro2/form-cadastro2.component';
import { FormCadastro3Component } from './components/form-cadastro3/form-cadastro3.component';
import { FormEsqueciMinhaSenhaComponent } from './components/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelaMapaComponent } from './components/tela-mapa/tela-mapa.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaContaComponent } from './components/tela-conta/tela-conta.component';

import { FormTelaCrudLogin } from './components/tela-login-crud/tela-login-crud.component';
import { AlterarSenhaComponent } from './components/alterar-senha/alterar-senha.component';
import { AlterarNomeComponent } from './components/alterar-nome/alterar-nome.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormCadastroComponent,
    FormCadastro2Component,
    FormCadastro3Component,
    FormEsqueciMinhaSenhaComponent,
    TelaMapaComponent,
    TelaPrincipalComponent,
    TelaContaComponent,
    FormTelaCrudLogin,
    AlterarSenhaComponent,
    AlterarNomeComponent,
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
