import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private service: AuthService, private http: HttpClient, private router: Router, private serviceCliente: ClienteService
  ) { }

  ngOnInit() {
    this.service.verificarToken();
    this.verCliente();
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }

  keyword = 'nombre';
  

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  data: any[] = [];

  verCliente() {
    this.serviceCliente.verCLiente().subscribe((response) => {
      this.data = response;
    })
  }


}
