import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario,Registro,FormsDoc,FormsEst,FormsMaes,Comentario } from './clases';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  baseUrl = 'http://localhost/API';
  constructor(private http: HttpClient) { }
  
  ValidarInicio(usuario: Usuario) {
   return this.http.post(`${this.baseUrl}/ValidarDatosInicioSesion.php`,usuario, {responseType: 'text'});
    
  }
  RegistrarUsuario(registro:Registro){
    return this.http.post(`${this.baseUrl}/RegistrarDatosUsuario.php`,registro, {responseType: 'text'});
  }
  RegistrarCometario(comentario:Comentario){
    return this.http.post(`${this.baseUrl}/RegistrarComentario.php`,comentario, {responseType: 'text'});
  }
  RegistrarEstudiante(formsEst:FormsEst){
    return this.http.post(`${this.baseUrl}/RegistrarEstudiante.php`,formsEst, {responseType: 'text'});
  }
  RegistrarDocumento(formsDoc:FormsDoc){
    return this.http.post(`${this.baseUrl}/RegistrarDocumento.php`,formsDoc, {responseType: 'text'});
  }
  RegistrarMaestro(formsMaes:FormsMaes){
    return this.http.post(`${this.baseUrl}/RegistrarMestro.php`,formsMaes, {responseType: 'text'});
  }

  CargarDocumento(archivo: FormsDoc) {
    var json = JSON.stringify(archivo);
    console.log(archivo);
    var headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(`${this.baseUrl}/Documentos`, archivo, { headers });
  }
}
