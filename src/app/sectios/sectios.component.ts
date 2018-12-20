import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import {TypesService} from '../types.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sectios',
  templateUrl: './sectios.component.html',
  styleUrls: ['./sectios.component.css']
})
export class SectiosComponent implements OnInit {

  constructor(private setions: TypesService, private router:Router ) { }
  data = this.setions.types;

  
  ngOnInit() {
   
  }
  onSelect(section){

    this.router.navigate(['/sectionDetails',section.id]);
  }
}
