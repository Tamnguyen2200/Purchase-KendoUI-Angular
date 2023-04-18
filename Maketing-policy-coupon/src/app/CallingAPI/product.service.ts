import { Injectable } from '@angular/core';
import { getProduct } from '../interface/getListProductInterface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { code } from '../interface/getListProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private url = "http://test.lapson.vn/api/product/GetProduct";
  constructor(private http: HttpClient) { }
  public getlistProduct(code: code): Observable<getProduct>{
    return this.http.post<getProduct>(this.url, code)
  }

}
