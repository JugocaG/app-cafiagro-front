import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ClienteService } from 'src/app/service/cliente/cliente.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  datos: any[] = [];

  filtercedula: string  = '';

  filternombre: string  = '';

  filtertelefono: string  = '';

  filterdireccion: string  = '';

  filtermunicipio: string  = '';

  filaEnEdicion: number | null = null;

  datoEditado: any = {};

  constructor(
    private serviceCliente: ClienteService, private http: HttpClient, private router: Router, private service: AuthService
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.verCliente();
  }

  applyFilters() {
    return this.datos.filter(item => {
      const cedula = item.cedula.toString();
      const nombre = item.nombre.toString().toLowerCase();
      const telefono = item.telefono.toString();
      const direccion = item.direccion.toString().toLowerCase();
      const municipio = item.municipio.toString().toLowerCase();


      return nombre.includes(this.filternombre.toLowerCase()) && cedula.includes(this.filtercedula) && telefono.includes(this.filtertelefono) && direccion.includes(this.filterdireccion.toLowerCase()) && municipio.includes(this.filtermunicipio.toLowerCase());
    });
  }

  verCliente() {
    this.serviceCliente.verCLiente().subscribe((response) => {
      this.datos = response;
    })
  }

  eliminarCliente(id: any){
    this.serviceCliente.eliminarCliente({"id" : id}).subscribe((response) =>{
      alert("¡Cuenta eliminado con exito!")
      window.location.href = '/clientes'
    },
    (error) => {
      const mensajeError = this.obtenerMensajeDeError(error);
      alert(error)
      
    })
  }

  editarFila(index: number): void {
    this.filaEnEdicion = index;
    // Copiar los datos originales a datoEditado para poder realizar ediciones
    this.datoEditado = { ...this.datos[index] };
  }

  guardarEdicion(id: any, cedula: any, nombre: any, telefono: any, direccion: any, municipio:any): void {
    // Lógica para guardar los cambios, por ejemplo, realizar una solicitud HTTP POST
    this.serviceCliente.editarCliente({"id": id, "cedula" : cedula, "nombre" : nombre, "telefono" : telefono, "direccion" : direccion, "municipio" : municipio}).subscribe((response) =>{
      alert("¡Cliente editado con exito!")
      window.location.href = '/clientes'
      
    },
    (error) => {
      const mensajeError = this.obtenerMensajeDeError(error);
      alert(error)
    })

  }

  obtenerMensajeDeError(error: any): string {
    if (error.error && error.error.text) {
      // Si existe la propiedad 'text' en el error, devolver ese valor
      return error.error.text;
    } else if (error.error instanceof ErrorEvent) {
      // Error de red o de cuenta
      return `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      return `Error: ${error.status} - ${error.message}`;
    }
  }

  cancelarEdicion(): void {
    // Cancelar la edición y reiniciar el estado
    this.filaEnEdicion = null;
  }

}
