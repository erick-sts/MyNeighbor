
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



//login + cadastro
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { FormCadastroComponent } from './components/cadastro/form-cadastro/form-cadastro.component';
import { FormCadastro2Component } from './components/cadastro/form-cadastro2/form-cadastro2.component';
import { FormCadastro3Component } from './components/cadastro/form-cadastro3/form-cadastro3.component';
import { FormEsqueciMinhaSenhaComponent } from './components/login/form-esqueci-minha-senha/form-esqueci-minha-senha.component';
//##

//mapa + configurações
import { TelaMapaComponent } from './components/menu-hamburguer/tela-mapa/tela-mapa.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaContaComponent } from './components/menu-hamburguer/conta-config/tela-conta/tela-conta.component';
import { AlterarSenhaComponent } from './components/menu-hamburguer/conta-config/alterar-senha/alterar-senha.component';
import { AlterarNomeComponent } from './components/menu-hamburguer/conta-config/alterar-nome/alterar-nome.component';
import { AlterarEnderecoComponent } from './components/menu-hamburguer/conta-config/alterar-endereco/alterar-endereco.component';
import { AlterarTelefoneComponent } from './components/menu-hamburguer/conta-config/alterar-telefone/alterar-telefone.component';
import { NavbarComponent } from './components/navbar/navbar';
//##


//Crud
import { FormTelaCrudLogin } from './components/crud/tela-login-crud/tela-login-crud.component';

    //usuario
    import { UsuarioFormComponent } from './components/crud/usuario/usuarioForm/usuario-form.component';
    import { UsuarioListComponent } from './components/crud/usuario/usuarioList/usuario-list.component';
import { RouterModule } from '@angular/router';
    //##

    //servico(pontoAlerta)
    // import {FormServicoCrud} from './components/crud/servico/servicoForm/servico-form.component';
    // CONVERSAR COM O LEON PARA DEFINIR OS ATRIBUTOS DE UM PONTO. 
    //##

//##





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
    UsuarioFormComponent,
    UsuarioListComponent,
    AlterarSenhaComponent,
    AlterarNomeComponent,
    AlterarEnderecoComponent,
    AlterarTelefoneComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
