export interface Factura {
  Id: string;
  codigoFactura: string;
  cliente:       string;
  ciudad:        string;
  nit:           string;
  totalFactura:  string;
  subtotal:      string;
  iva:           string;
  retencion:     string;
  fechaCreacion: string;
  estado:        string;
  pagada:        boolean;
  fechaPago:     string;
}
