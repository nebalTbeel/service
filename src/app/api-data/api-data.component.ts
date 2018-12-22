import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from '@angular/router';
import {Iproduct} from '../models/product'

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(private api: ApiServiceService, private router:Router) { }
product = [];
  ngOnInit() {
    this.api.getProduct().subscribe(products =>this.product =products )

  }
  /********************************************** */
  selectedObj =[]
id=this.id;
title = this.title
body = this.body


  addProduct(){
    let product ={
      "userId": this.id,
      "id": 5,
      "title": this.title,
      "body": this.body
        }

   
    if(this.id && this.title && this.body){
     
     this.api.addProduct(product).subscribe(res =>this.product.push(res))
      
    }
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

}
