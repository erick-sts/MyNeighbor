import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormCadastro2Component } from './components/form-cadastro2/form-cadastro2.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormCadastro3Component } from './components/form-cadastro3/form-cadastro3.component';
import { FormEsqueciMinhaSenhaComponent } from './components/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
import { TelaMapaComponent } from './components/tela-mapa/tela-mapa.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaContaComponent } from './components/tela-conta/tela-conta.component';
import { FormTelaCrudLogin } from './components/tela-login-crud/tela-login-crud.component';
import { AlterarSenhaComponent } from './components/alterar-senha/alterar-senha.component';
import { AlterarNomeComponent } from './components/alterar-nome/alterar-nome.component';
import { AlterarEnderecoComponent } from './components/alterar-endereco/alterar-endereco.component';
import { AlterarTelefoneComponent } from './components/alterar-telefone/alterar-telefone.component';

const routes: Routes = [
  { path: '', component: TelaMapaComponent },
  { path: 'login', component: FormLoginComponent },
  { path: 'cadastro', component: FormCadastroComponent },
  { path: 'cadastro/parte2', component: FormCadastro2Component },
  { path: 'cadastro/parte3', component: FormCadastro3Component },
  { path: 'esqueci-minha-senha', component: FormEsqueciMinhaSenhaComponent },
  { path: 'mapa', component: TelaMapaComponent },
  { path: 'home', component: TelaPrincipalComponent },
  { path: 'conta', component: TelaContaComponent },
  { path: 'adm', component: FormTelaCrudLogin },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'alterar-nome', component: AlterarNomeComponent },
  { path: 'alterar-endereco', component: AlterarEnderecoComponent },
  { path: 'alterar-telefone', component: AlterarTelefoneComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
