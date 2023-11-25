export class Usuario {
    'id': number;
    'cpf': string; 
    'nome': string; 
    'dataNascimento': string; 
    'senha': string; 
    'email': string; 
    'cidade': string; 
    'bairro': string; 
    
    //visibilidade
    'idCustomView': number;
    'viewAlerta': boolean;
    'viewEvento': boolean;
    'viewAnuncio': boolean;
    //##

    //enum tipoUsuario
    'USUARIO_PADRAO': string;
    'USUARIO_ADMINISTRADOR': string;
    //##
}