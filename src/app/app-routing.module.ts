import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormCadastro2Component } from './components/cadastro/form-cadastro2/form-cadastro2.component';
import { FormCadastroComponent } from './components/cadastro/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormCadastro3Component } from './components/cadastro/form-cadastro3/form-cadastro3.component';
import { FormEsqueciMinhaSenhaComponent } from './components/login/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
import { TelaMapaComponent } from './components/menu-hamburguer/tela-mapa/tela-mapa.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaContaComponent } from './components/menu-hamburguer/conta-config/tela-conta/tela-conta.component';
import { FormTelaCrudLogin } from './components/crud/tela-login-crud/tela-login-crud.component';
import { AlterarSenhaComponent } from './components/menu-hamburguer/conta-config/alterar-senha/alterar-senha.component';
import { AlterarNomeComponent } from './components/menu-hamburguer/conta-config/alterar-nome/alterar-nome.component';
import { AlterarEnderecoComponent } from './components/menu-hamburguer/conta-config/alterar-endereco/alterar-endereco.component';
import { AlterarTelefoneComponent } from './components/menu-hamburguer/conta-config/alterar-telefone/alterar-telefone.component';
import { NavbarComponent } from './components/navbar/navbar';

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
  {path: 'menu', component: NavbarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
