import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiServiceService} from '../api-service.service';



@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css']
})
export class ApiDetailsComponent implements OnInit {

  constructor(private apii: ApiServiceService ,private route: ActivatedRoute ) { }
  secId
  description
  product = [];
  ngOnInit() {
    this.apii.getProduct().subscribe(products => this.product = products)

    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.secId = id;

console.log(this.product);
  /*  let desc = this.product.find(x => x.id === id).body;
    this.description = desc;
*/
    //this.description = this.product.body;
   /* let desc = this.product.find(x => x.id === id).body;
    this.description = desc;
*/


}
  }

