import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private service: AuthService) { }

  verCLiente(): Observable<any> {
    return this.http.get(BASE_URL + 'api/v1/cliente/ver-clientes', {
      headers: this.service.createAuthorizationHeader()
    });
    
  }

  crearCliente(crearClienteRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/v1/cliente/crear-cliente', crearClienteRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }


  eliminarCliente(eliminarClienteRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/v1/cliente/eliminar-cliente', eliminarClienteRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }

  editarCliente(eliminarClienteRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/v1/cliente/editar-cliente', eliminarClienteRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }

  

  
}
