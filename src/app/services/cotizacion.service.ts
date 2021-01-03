import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cotizacion } from '../interfaces/cotizacion';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private http_:HttpClient) { }

  getAllCotizaciones(){
   let headers = new HttpHeaders({
   	"Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      "Content-Type": "application/json",
      "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
   });
    const path = 'http://localhost:8000/documentos';
  	return this.http_.get<Cotizacion>(path,{headers});//<Cotizacion[]>

  }
  editItem(datos){
     let headers = new HttpHeaders({
         "Access-Control-Allow-Headers" : "Content-Type",
         "Access-Control-Allow-Origin": "http://localhost:4200",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         "Content-Type": "application/json",
         "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
      });
    const path = 'http://localhost:8000/editar/';
    // let params = JSON.stringify(datos);
    return this.http_.post( path, datos, {headers});
     // return this.http_.post(path,{headers})
  }

  getcliente(getcliente){
     let headers = new HttpHeaders({
         "Access-Control-Allow-Headers" : "Content-Type",
         "Access-Control-Allow-Origin": "http://localhost:4200",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         "Content-Type": "application/json",
         "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
      });
    const path = 'http://localhost:8000/getCliente/';
    let params = JSON.stringify(getcliente);
    return this.http_.post<Cliente>( path, params, {headers});
     // return this.http_.post(path,{headers})
  }

  addDocumento(doc){
      let headers = new HttpHeaders({
         "Access-Control-Allow-Headers" : "Content-Type",
         "Access-Control-Allow-Origin": "http://localhost:4200",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         "Content-Type": "application/json",
         "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
      });
      const urlback = 'http://localhost:8000/crear_documento';
      // let params = JSON.stringify(doc);
      return this.http_.post( urlback, doc, {headers});
   }

   addUser(user){
      let headers = new HttpHeaders({
         "Access-Control-Allow-Headers" : "Content-Type",
         "Access-Control-Allow-Origin": "http://localhost:4200",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         "Content-Type": "application/json",
         "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
      });
      const urlback = 'http://localhost:8000/registrer';
      let params = JSON.stringify(user);
      return this.http_.post( urlback, params, {headers});
   }

   getAllAcabados(){
      let headers = new HttpHeaders({
         "Access-Control-Allow-Headers" : "Content-Type",
         "Access-Control-Allow-Origin": "http://localhost:4200",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
         "Content-Type": "application/json",
         "api_token": "Gwz9VpxpNNDEk03vQhbEiYIAuin4Fj3k"
      });
      const path = 'http://localhost:8000/acabados';
      return this.http_.get<Cotizacion>(path,{headers});
   }


}
