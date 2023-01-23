import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { Factura } from '../../interfaces/Facturas.interfaces';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  constructor( private facturaservice: FacturasService ){}
  factura: Factura[] = []
  ngOnInit(): void {
    this.facturaservice.ConsultarFacturas()
    .subscribe((resp) =>{
      this.factura = resp;
      console.log(this.factura)
    })
  }

}
