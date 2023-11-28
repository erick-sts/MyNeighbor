import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//cadastro
import { FormCadastro2Component } from './components/cadastro/form-cadastro2/form-cadastro2.component';
import { FormCadastroComponent } from './components/cadastro/form-cadastro/form-cadastro.component';
import { FormCadastro3Component } from './components/cadastro/form-cadastro3/form-cadastro3.component';
//##

//login + esqueci senha
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormEsqueciMinhaSenhaComponent } from './components/login/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
//##

//tela mapa + configurações + navbar
import { TelaMapaComponent } from './components/menu-hamburguer/tela-mapa/tela-mapa.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaContaComponent } from './components/menu-hamburguer/conta-config/tela-conta/tela-conta.component';
import { AlterarSenhaComponent } from './components/menu-hamburguer/conta-config/alterar-senha/alterar-senha.component';
import { AlterarNomeComponent } from './components/menu-hamburguer/conta-config/alterar-nome/alterar-nome.component';
import { AlterarEnderecoComponent } from './components/menu-hamburguer/conta-config/alterar-endereco/alterar-endereco.component';
import { AlterarTelefoneComponent } from './components/menu-hamburguer/conta-config/alterar-telefone/alterar-telefone.component';
import { NavbarComponent } from './components/navbar/navbar';

//Crud
import { FormTelaCrudLogin } from './components/crud/tela-login-crud/tela-login-crud.component';
  
    //usuario
    import { UsuarioFormComponent } from './components/crud/usuario/usuarioForm/usuario-form.component';
    import { UsuarioListComponent } from './components/crud/usuario/usuarioList/usuario-list.component';
    //##

    //servico(pontoAlerta)
    // import {FormServicoCrud} from './components/crud/servico/servicoForm/servico-form.component';
    // CONVERSAR COM O LEON PARA DEFINIR OS ATRIBUTOS DE UM PONTO. 
    //##

//##

const routes: Routes = [
  
  //Login
    { path: '', component: FormLoginComponent },
    { path: 'esqueci-minha-senha', component: FormEsqueciMinhaSenhaComponent },
  //##

  //Cadastro
    { path: 'cadastro', component: FormCadastroComponent },
    { path: 'cadastro/parte2', component: FormCadastro2Component },
    { path: 'cadastro/parte3', component: FormCadastro3Component },
  //##

  //tela principal + mapa + configurações
    { path: 'mapa', component: TelaMapaComponent },
    { path: 'home', component: TelaPrincipalComponent },
    { path: 'conta', component: TelaContaComponent },
    { path: 'alterar-senha', component: AlterarSenhaComponent },
    { path: 'alterar-nome', component: AlterarNomeComponent },
    { path: 'alterar-endereco', component: AlterarEnderecoComponent },
    { path: 'alterar-telefone', component: AlterarTelefoneComponent },
    {path: 'menu', component: NavbarComponent},
  //##

  //Crud
  { path: 'loginAdm', component: FormTelaCrudLogin },
  
  //usuarioCrud  
    { path: 'usuarios', component: UsuarioListComponent },
    { path: 'usuarios/novo', component: UsuarioFormComponent },
    {path: 'usuarios/editar/:id', component: UsuarioFormComponent},
  //##
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
