import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  crearClienteForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.crearClienteForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  crearCliente(){

    console.log(this.crearClienteForm.value);
    this.clienteService.crearCliente(this.crearClienteForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Cliente creado con exito!")
      this.router.navigateByUrl('/clientes');
    
    })

  }
  
  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }

}
