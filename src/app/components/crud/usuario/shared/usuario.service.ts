import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://localhost:9090/usuario';


  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Usuario[]>(this.URL);
  }

  public insert(usuario: Usuario) {
    return this.http.post<Usuario>(this.URL, usuario);
  }

  getById(id: number) {
    const newUrl = `${this.URL}/${id}`;
    return this.http.get<Usuario>(newUrl);
  }

  public update(usuario: Usuario) {
    const newUrl = `${this.URL}/${usuario.id}`;
    return this.http.put<Usuario>(newUrl, usuario);
  }

  public delete(id: number) {
    const newUrl = `${this.URL}/${id}`;
    return this.http.delete<Usuario>(newUrl);
  }
}
