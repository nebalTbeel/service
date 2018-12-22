import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iproduct} from './models/product'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }


  getProduct():Observable<Iproduct[]>{
    console.log ('ddd');
  return this.http.get<Iproduct[]>(this.url);
    } 

  

    public addProduct(obj : Iproduct){
   return this.http.post<Iproduct>(this.url,obj);

      
      } 

}


