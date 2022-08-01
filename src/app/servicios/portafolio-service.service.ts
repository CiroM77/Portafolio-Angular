import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Class/persona';
import { Educacion } from '../Class/educacion';

@Injectable({
  providedIn: 'root'
})
export class PortafolioServiceService {

  constructor(private http:HttpClient) { }
  
  url:string="http://localhost:8080/ver/personas";
  urlEdu:string="http://localhost:8080/ver/educacion";
  urlCrear:string="http://localhost:8080/new/educacion";
  urlDel:string="http://localhost:8080//delete/educacion/{id}"

  obtenerDatos():Observable<Persona> {
    return this.http.get<Persona>(this.url)
  }

  obtenerDatosEdu():Observable<Educacion> {
    return this.http.get<Educacion>(this.urlEdu)
  }

  crearEdu(educacion: Educacion):Observable<Object> {
    return this.http.post<Educacion>(this.urlCrear, Educacion)
  }

  deleteEdu(id: number): Observable<Object>{
    return this.http.delete(this.urlDel);
  }

}
