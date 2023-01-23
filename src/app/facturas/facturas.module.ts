import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClienteComponent } from './pages/listado-cliente/listado-cliente.component';
import { ListadoFacturasComponent } from './pages/listado-facturas/listado-facturas.component';
import { FacturasClienteComponent } from './pages/facturas-cliente/facturas-cliente.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TablafacturaComponent } from './components/tablafactura/tablafactura.component';



@NgModule({
  declarations: [
    ListadoClienteComponent,
    ListadoFacturasComponent,
    FacturasClienteComponent,
    TablafacturaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    ListadoClienteComponent,
    ListadoFacturasComponent,
    FacturasClienteComponent,
  ]

})
export class FacturasModule { }
