import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }
  getProductos(){
    return this.http.get("https://fakestoreapi.com/products");
  }
}
