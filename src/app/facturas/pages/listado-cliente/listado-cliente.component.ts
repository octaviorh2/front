import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { ClienteCollection } from '../../interfaces/Cliente.interfaces';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent  implements OnInit{

    constructor( private facturaservice: FacturasService ){}
    cliente: ClienteCollection[] = []

    ngOnInit(): void {
      this.facturaservice.ConsultarClientes()
      .subscribe((resp) =>{
        this.cliente = resp;
        console.log(this.cliente)
      })
  }






}
