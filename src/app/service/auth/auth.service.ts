import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


const BASE_URL = ['http://localhost:8080/']


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient

  ) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  logout(): Observable<any> {
    localStorage.removeItem('JWT');
    window.location.href = '/'
    return of(null);
  }

  createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }

  verificarToken(){
    const token = localStorage.getItem('JWT');
  
    // Verifica si el token está presente
    if (token) {
      // Configura los encabezados de la solicitud con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      // Realiza la solicitud GET con los encabezados configurados
      this.http.get('http://localhost:8080/api/v1/cliente/ver-clientes', { headers }).subscribe(
        (data) => {
          // Manejar la respuesta exitosa aquí
          console.log('Respuesta exitosa');
        },
        (error) => {
          // Manejar el error aquí
          console.error('Error en la solicitud:', error);
          localStorage.removeItem('JWT');
          window.location.href = '/'
        }
      );
    } else {
      console.error('Token no presente en localStorage');
      window.location.href = '/login'
      // Puedes tomar medidas adicionales, como redirigir a la página de inicio de sesión, si el token no está presente.
    }
  }
}
