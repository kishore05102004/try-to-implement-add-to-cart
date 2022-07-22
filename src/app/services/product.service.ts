import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  private _url= 'http://localhost:2000/api/products1'

  product1(){
    return this.http.get<any>(this._url)
  }
}
