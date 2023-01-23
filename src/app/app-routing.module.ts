import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFacturasComponent } from './facturas/pages/listado-facturas/listado-facturas.component';
import { FacturasClienteComponent } from './facturas/pages/facturas-cliente/facturas-cliente.component';
import { ListadoClienteComponent } from './facturas/pages/listado-cliente/listado-cliente.component';

const routes: Routes = [
  {
    path:'',
    component:  ListadoClienteComponent
  },
  {
    path:'listadofacturas',
    component: ListadoFacturasComponent
  },
  {
    path : 'FacturaCliente',
    component :  FacturasClienteComponent

  },
  {
    path :'**',
    redirectTo : ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
