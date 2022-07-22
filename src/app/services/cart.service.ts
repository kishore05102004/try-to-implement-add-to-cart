import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { }

  private _url= 'http://localhost:2000/api/cart'

  cart(data:any){
    return this.http.post<any>(this._url,data)
  }
}

