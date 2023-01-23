import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { ClienteCollection } from '../../interfaces/Cliente.interfaces';
import { Factura } from '../../interfaces/Facturas.interfaces';

@Component({
  selector: 'app-facturas-cliente',
  templateUrl: './facturas-cliente.component.html',
  styles:[
    `
    button{
        margin: 10px;
    }
    `
  ]
})
export class FacturasClienteComponent implements OnInit {

  constructor( private facturaservice: FacturasService ){}

  ngOnInit(): void {
    this.facturaservice.ConsultarClientes()
    .subscribe((resp) =>{
      this.cliente = resp;
      console.log(this.cliente)
    })
}
    cliente: ClienteCollection[] = []
    factura :Factura[] = [];
    clienteActivo:string = '';



    activarCliente(region:string){
    if(region ===  this.clienteActivo){return}
    this.clienteActivo =  region;
    this.factura = [];
    this.facturaservice.ConsultarFacturasxcliente(region)
    .subscribe((factura) =>{
      this.factura = factura
    })
  }

  getClasCss(region: string){
    return (region ===this.clienteActivo)? 'btn btn-primary ml-2' : 'btn btn-outline-primary ml-2'
  }



}
