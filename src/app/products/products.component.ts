import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private product : ProductService, private Add : CartService  ) { }

  products:any=[]

  productdetails={id:1}

  ngOnInit(): void {

    this.product.product1()
    .subscribe(
      data => this.products=data
      )
  }

  // data(id:any)
  // {
  //   console.log(id);
  //   this.Add.cart(this.productdetails)
  //   .subscribe(res => console.log(res))
  // }

  data(id:any)
  {
    console.log(id);
    this.Add.cart(this.productdetails)
    .subscribe(res => console.log(res))
  }

  

}
