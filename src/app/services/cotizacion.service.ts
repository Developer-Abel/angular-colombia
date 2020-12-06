import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cotizacion } from '../interfaces/cotizacion';
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
    // const path = 'https://jsonplaceholder.typicode.com/users/1';
    const path = 'http://localhost:8000/documentos';
  	return this.http_.get(path,{headers});//<Cotizacion[]>

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
    // let params = "json="+json;
    // console.log(params);
    return this.http_.post( urlback, params, {headers});
   }

}
