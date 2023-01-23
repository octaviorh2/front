import { Component, Input } from '@angular/core';
import { Factura } from '../../interfaces/Facturas.interfaces';

@Component({
  selector: 'app-tablafactura',
  templateUrl: './tablafactura.component.html',
  styleUrls: ['./tablafactura.component.css']
})
export class TablafacturaComponent {


  @Input() factura : Factura[]=[];
}
