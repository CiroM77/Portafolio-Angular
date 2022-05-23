import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8070/login";
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(
      sessionStorage.getItem("currentUser") || "{}"))

  }

  IniciarSesion(credenciales:any):Observable<any>
   {
     return this.http.post(this.url, credenciales).pipe(map(data=>{
       sessionStorage.setItem("currentUser", JSON.stringify(data));
       this.currentUserSubject.next(data);
       return data;
     }))
   }

   get usuarioAutenticado(){
     return this.currentUserSubject.value;
   }

    // Para cerrar sesión elinimamos el token del localstorate
  logout() {
  localStorage.removeItem('token');
  }
  // Un servicio para verificar si existe la sesión
  public get logIn(): boolean {
  return (localStorage.getItem( 'token') !== null);
  
  }
}
