    import { Component, OnInit } from '@angular/core';
    import {Usuario} from '../shared/usuario';
    import { UsuarioService } from '../shared/usuario.service';

    @Component({
    selector: 'app-usuario-list',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.css']
    })
    export class UsuarioListComponent implements OnInit{
    title = 'Relação de Usuários';
    'usuarios': Usuario[]

    constructor(private usuarioService: UsuarioService){ }
    ngOnInit() { 
        this.getAll();
    }

    getAll(){
        this.usuarioService.getAll().subscribe((resp: Usuario[]) => {
        this.usuarios = resp
        })
    }

    delete(usuario:Usuario){
        if (window.confirm('Tem certeza que deseja excluir o registro?')){
        this.usuarioService.delete(usuario.id).subscribe(() => {
        this.usuarios = this.usuarios.filter( c => c !== usuario);
        });
    }
    }

    }

