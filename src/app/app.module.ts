import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { VerTransaccionesComponent } from './components/transaccion/ver-transacciones/ver-transacciones.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TransaccionComponent,
    VerTransaccionesComponent,
    ClienteComponent,
    CrearClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
