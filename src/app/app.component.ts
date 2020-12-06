import { Component } from '@angular/core';
import { NgForm,FormGroup, FormControl, Validators } from '@angular/forms';
import { CotizacionService } from './services/cotizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angu';
  allDocumentos;
  name:string;
  miFormulario: FormGroup;
  constructor(private CotizacionService_:CotizacionService){
  }

ngOnInit(){
this.CotizacionService_.getAllCotizaciones().subscribe((response)=>{
      console.log(response);
      this.allDocumentos = response;
      // console.log("listo"+this.allDocumentos['documentos']);
    })
}
/** esta funcion ya no se utiliza **/
  getAllCotizaciones(){
  	this.CotizacionService_.getAllCotizaciones().subscribe((response)=>{
  		console.log(response);
      this.allDocumentos = response;
  	})
  }

  addUser(){
    console.log(this.miFormulario.value);
  //   console.log(this.name);
    const user = {
      "nombre":"lola",
      "apellido_p":"Perez",
      "apellido_m":"Lopez",
      "usuario":"maricela",
      "email":"lola@gmail.com",
      "password":"1234567890",
      "empresa_id":1,
      "cedula":"002",
      "cargo":"Administrativo",
      "telefono":"555 55 555",
      "celular":"444 44 444"
  };
  // this.CotizacionService_.addUser(user).subscribe(
  //     (newUser) => {
  //       newUser.data = user;
  //       console.log(newUser);
  //     });
  }
}
