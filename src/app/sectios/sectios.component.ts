import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import {TypesService} from '../types.service';
import { Router } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-sectios',
  templateUrl: './sectios.component.html',
  styleUrls: ['./sectios.component.css']
})
export class SectiosComponent implements OnInit {

  constructor(private setions: TypesService, private router:Router ) { }
  data = this.setions.types;
 
product = [];
  ngOnInit() {
     this.setions.getProduct().subscribe(products =>this.product =products )

  }
  onSelect(section){

    this.router.navigate(['/sectionDetails',section.id]);
  }
}
