import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iproduct} from './models/product'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
 url= 'http://localhost:3000/products';

  public getProductById(id: number):Observable<Iproduct[]>{

    return this.http.get<Iproduct[]>(`${this.url}/${id}`);
}
/********************************* */

  public getProduct():Observable<Iproduct[]>{
   // console.log ('ddd');
  return this.http.get<Iproduct[]>(this.url);
    } 

/******************************** */
     addProduct(obj){

      return this.http.post<Iproduct>(this.url,obj)
    } 

    /*************************************** */

delete(id){
  console.log(id);
    const url = `${this.url}/${id}`;
 
    return this.http.delete<Iproduct>(url);
}
      

 

}


