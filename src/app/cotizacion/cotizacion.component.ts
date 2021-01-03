import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormGroup, FormControl,FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
/** Clases **/
import { ClassCliente } from '../clases/cliente';
import { ClassAcabado } from '../clases/Acabado';
import { ClassDocumento } from '../clases/Documento';
import { ClassItem } from '../clases/Item';
/** Servicios **/
import { CotizacionService } from '../services/cotizacion.service';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})

export class CotizacionComponent implements OnInit {
	@ViewChild('cerrarModalItem') closeAddExpenseModal: ElementRef;
	allCotizaciones;
	allAcabados;
	id_cotizacion:number = 0;
	msgErrorCliente:string;
	cliente:ClassCliente = new ClassCliente();
	acabado:ClassAcabado = new ClassAcabado();
	item:ClassItem = new ClassItem();
	idCliente:object;
	formItem:	 ;
	// formTalonario:FormGroup;

	mostrar:boolean = false;
	bandera:number = 0;
	iddocumento= 0;

	constructor(private cotizacionService_: CotizacionService) {
		this.formItem= this.FormItem();
	}
	ngOnInit(): void {}

	/***** FUNCIONES *****/
	getCotizaciones(){
		this.cotizacionService_.getAllCotizaciones().subscribe((response)=>{
			this.allCotizaciones = response;
			console.log(response);
			this.id_cotizacion = response[0].documento_id;
		});
	}
	getcliente(nit){
		const num_key = {
			"num_key":nit
		};
		this.cotizacionService_.getcliente(num_key).subscribe((response:ClassCliente)=>{
			this.cliente = response;
			this.idCliente = this.cliente['id_tercero'];
			this.msgErrorCliente = '';
			this.getCotizaciones();
		},(err : HttpErrorResponse)=>{
			this.msgErrorCliente = err.error;
			this.cliente = new ClassCliente();
			this.idCliente = this.cliente['id_tercero'];
		})
	}
   FormItem(){
		return new FormGroup({
			plantilla      : new FormControl(),
			cantidad       : new FormControl(),
			descripcion    : new FormControl(),
			tam_1          : new FormControl(),
			tam_2          : new FormControl(),
			tinta_1        : new FormControl(),
			tinta_2        : new FormControl(),
			val_diseno     : new FormControl(),
			transporte     : new FormControl(),
			val_rifle      : new FormControl(),
			val_tip_maq    : new FormControl(),
			tipo_papel     : new FormControl(),
			por_ganancia   : new FormControl(),
			costos         : new FormControl(),
			ganancia       : new FormControl(),
			id_tercero     : new FormControl(),
			tipo_documento : new FormControl(),
			num_acabado1   : new FormControl(),
			num_acabado2   : new FormControl(),
			num_acabado3   : new FormControl(),
			num_acabado4   : new FormControl(),
			num_acabado5   : new FormControl(),
			num_acabado6   : new FormControl(),
			num_acabado7   : new FormControl(),
			num_acabado8   : new FormControl(),
			num_acabado9   : new FormControl(),
			hayAcabado     : new FormControl(),
			id_documento   : new FormControl(),
		});
	}
	iscabado(status){
		if (status == true) {
			this.bandera ++;
			console.log(this.bandera);
		}else{
			this.bandera--;
			console.log(this.bandera);
		}
	}
	guardarItem(){
		/** Verifica si existen acabados**/
		if (this.bandera>0) {
			this.formItem.patchValue({hayAcabado: true});
		}else{
			this.formItem.patchValue({hayAcabado: false});
		}
		/** Verifica si ya existe el documento **/
		if (this.iddocumento != 0) {
			this.formItem.patchValue({id_documento: this.iddocumento});
		}else{
			this.formItem.patchValue({id_documento: 0});
		}
		/** Agrega el id del cliente **/
		this.formItem.patchValue({id_tercero: this.idCliente, tipo_documento: "ITEM SENCILLO"});
		/** Manda los datos al servicio **/
		const datos = this.formItem.value;
		this.cotizacionService_.addDocumento(datos).subscribe(
		(response) => {
			this.iddocumento = Number(response);
			this.getCotizaciones();
			this.closeAddExpenseModal.nativeElement.click();
			console.log(response);
		},(err : HttpErrorResponse)=>{
			console.log(err.error);
		});
	}
	editarItem(iddoc, iditem){
		// console.log(iddoc+" - "+iditem);
		const datos = {
			"id_documento":iddoc,
			"id_detalle":iditem
		};
		this.cotizacionService_.editItem(datos).subscribe((response:ClassItem)=>{
			console.log(response);
			this.item = response[0];
			// this.cliente = response;
			// this.idCliente = this.cliente['id_tercero'];
			// this.msgErrorCliente = '';
			// this.getCotizaciones();
		},(err : HttpErrorResponse)=>{
			console.log(err.error);
			// this.msgErrorCliente = err.error;
			// this.cliente = new ClassCliente();
			// this.idCliente = this.cliente['id_tercero'];
		})
	}
	siguiente(){
		this.getAcabados();
		document.getElementById("view_item").style.display='none';
		document.getElementById("view_acabado").style.display='block';
		this.mostrar = true;
	}
	anterior(){
		document.getElementById("view_item").style.display='block';
		document.getElementById("view_acabado").style.display='none';
		this.mostrar = false;
	}
	getAcabados(){
		this.cotizacionService_.getAllAcabados().subscribe((response)=>{
			this.allAcabados = response;
		});
	}



}
