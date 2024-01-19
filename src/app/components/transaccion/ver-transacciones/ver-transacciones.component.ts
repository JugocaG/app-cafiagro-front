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
      this.datos = response;
      
    })

  }

}
