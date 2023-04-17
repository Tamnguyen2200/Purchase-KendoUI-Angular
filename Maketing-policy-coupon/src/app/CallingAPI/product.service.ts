import { Injectable } from '@angular/core';
import { getListProduct } from '../interface/getListProductInterface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://test.lapson.vn/api/product/GetListProductByIDs";
  constructor(private http: HttpClient) { }
  // public getlistProduct(par: body): Observable<getListProduct>{
  //   return this.http.post<getListProduct>(this.url ,par)
  // }

}
