import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TypesService} from '../types.service';
@Component({
  selector: 'app-section-details',
  template: `
    <p>
    
      You selected the section with id = "{{secId}}" and description is 
      "{{description}}"
    </p>
  `,
  styles: []
})

export class SectionDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private setions: TypesService) { }
public secId ;
public description;

  ngOnInit() {
    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.secId = id;
    let desc = this.setions.types.find(x => x.id === id).description;
   this.description = desc;
  
  }




}
