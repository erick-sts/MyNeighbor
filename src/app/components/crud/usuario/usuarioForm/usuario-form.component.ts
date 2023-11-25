import { Component } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/usuario.service';



@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  'usuario': Usuario; //criando variável do tipo Cliente.
  title = " "; //dando um valor vazio String a variável title.


  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {   }


  ngOnInit(){
    this.title = "Novo Usuário";
    this.usuario = new Usuario();

    const id = this.route.snapshot.paramMap.get('id');

    if (id){
      this.usuarioService.getById(parseInt(id)).subscribe(resp => {
        this.usuario = resp;
        this.title = `Alterando o usuario ${this.usuario.nome}`
      })
    }
  }


  ngOnSubmit(){
     let observable: Observable<Usuario>;

     observable = this.usuarioService.insert(this.usuario);
     observable.subscribe(() => {
      this.router.navigate(['/usuarios'])
     })
}}
