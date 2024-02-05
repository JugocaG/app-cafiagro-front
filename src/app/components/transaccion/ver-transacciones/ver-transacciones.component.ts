import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TransaccionServiceService } from 'src/app/service/transaccion/transaccion.service';



@Component({
  selector: 'app-ver-transacciones',
  templateUrl: './ver-transacciones.component.html',
  styleUrls: ['./ver-transacciones.component.css']
})
export class VerTransaccionesComponent {

  datos: any[];

  filteridComprador: string  = '';

  filternombreComprador: string  = '';

  filterfechaTransaccion: string  = '';

  constructor(
    private serviceTransaccion: TransaccionServiceService, private http: HttpClient, private router: Router, private service: AuthService
  ) { }

  ngOnInit() {
    this.verTransaccion();
  }

  verTransaccion() {
    this.service.verificarToken()
    this.serviceTransaccion.verTransacciones().subscribe((response) => {
      console.log(response);
      this.datos = this.formatiarFechas(response);
  
    })


  }

  formatiarFechas(data: any[]): any[] {
    return data.map(item => {
      // Suponiendo que la fecha está en una propiedad llamada 'fecha'
      if (item.fechaTransaccion) {
        item.fechaTransaccion = this.formatFecha(item.fechaTransaccion);
      }
      // Aquí puedes agregar más lógica si hay otras fechas en tu objeto

      return item;
    });
  }

  applyFilters() {
    return this.datos.filter(item => {
      const idComprador = item.idComprador.toString();
      const nombreComprador = item.nombreComprador.toString().toLowerCase();
      const fechaTransaccion = item.fechaTransaccion.toString();


      return idComprador.includes(this.filteridComprador) && nombreComprador.includes(this.filternombreComprador.toLocaleLowerCase()) && fechaTransaccion.includes(this.filterfechaTransaccion);
    });
  }

  formatFecha(fecha: string): string {
    const date = new Date(fecha);

    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }

}
