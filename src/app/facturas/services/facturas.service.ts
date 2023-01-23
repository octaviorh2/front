import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteCollection } from '../interfaces/Cliente.interfaces';
import { Observable } from 'rxjs';
import { Factura } from '../interfaces/Facturas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {


  constructor(private http: HttpClient) { }



  ConsultarClientes():Observable<ClienteCollection[]>{
    const url = 'https://localhost:7093/api/Cliente' ;
    return this.http.get<ClienteCollection[]>(url);
  }
  ConsultarFacturas():Observable<Factura[]>{
    const url = 'https://localhost:7093/api/Factura' ;
    return this.http.get<Factura[]>(url);
  }

  ConsultarFacturasxcliente(termino : string):Observable<Factura[]>{
    const url = `https://localhost:7093/api/Factura/${termino}` ;
    return this.http.get<Factura[]>(url);
  }
  CambiarestadoFactura(factura:Factura):Observable<Factura>{
    const url = `https://localhost:7093/api/Factura/${factura.Id}` ;
    return this.http.put<Factura>(url ,factura);
  }

}
