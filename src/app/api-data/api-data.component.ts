import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from '@angular/router';
import {Iproduct} from '../models/product'
import { getLocaleDateTimeFormat, formatDate } from '@angular/common';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(private api: ApiServiceService, private router:Router, private http:HttpClient) { 

    
  }

  addNew(myform){
console.log(myform);
console.log(myform.value);
  }
product = [];
show = false;
  ngOnInit() {

    this.api.getProduct().subscribe(products =>this.product =products )
  }
  /********************************************** */
  selectedObj =[]


  id=this.id;
  name = this.name
  size = this.size
  color = this.color
  prand = this.prand
  category = this.category
  image = this.image
   
  

  addProduct(){
   let image = this.image + Date()
    let product ={
      "id": this.id,
      "name": this.name,
      "size": this.size,
      "color": this.color,
      "prand": this.prand,
      "category": this.category,
      "image" : image
        }
      //  alert (image);
          this.api.addProduct(product).subscribe(res =>this.product.push(res))
 
  }
  /************************************ */
  del
  delete(id){
    this.api.delete(id).subscribe(products =>this.del =products )
console.log(this.del);
  }
  /************************************* */
  onSelect(api){

    this.router.navigate(['/apiDetails',api.id]);
  }
/************************************ */
prom = {}
edit(id){
this.show = !this.show;
this.api.getProductById(id).subscribe(products =>this.prom =products )

}


updateProduct(){
  let product ={
    "id": this.id,
    "name": this.name,
    "size": this.size,
    "color": this.color,
    "prand": this.prand,
    "category": this.category
      }

      console.log(product);

}
}
