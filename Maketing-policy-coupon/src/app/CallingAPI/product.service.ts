import { Injectable } from '@angular/core';
import { getProduct } from '../DTO/getListProductInterface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { code } from '../DTO/getListProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private url = "http://test.lapson.vn/api/product/GetProduct";
  constructor(private http: HttpClient) { }
  public getProduct(code: code): Observable<getProduct>{
    return this.http.post<getProduct>(this.url, code)
  }

}
