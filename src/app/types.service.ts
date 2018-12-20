import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor() { }

  types=[
{id:1,name:"ملابس",description:" ملابس أطفال ورجال "},
{id:2,name:"أحذية",description:" أحذية أطفال ورجال"},
{id:3,name:"اكسسوار",description:" اكسسوارات تخص الأطفال"}

  ]


  
}
