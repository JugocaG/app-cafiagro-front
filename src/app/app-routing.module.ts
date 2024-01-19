import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerTransaccionesComponent } from './components/transaccion/ver-transacciones/ver-transacciones.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ver-transaccion', component: VerTransaccionesComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'clientes/crear-cliente', component: CrearClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
