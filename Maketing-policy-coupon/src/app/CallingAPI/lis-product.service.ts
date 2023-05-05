import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { getListProduct } from '../DTO/getListProductInterface';
import { body } from '../DTO/getListProductInterface';

@Injectable({
  providedIn: 'root'
})
export class LisProductService {
  public loading: boolean = false;
  private url = "http://test.lapson.vn/api/product/GetListProduct";
  constructor(private http: HttpClient) {}
  public getlistProduct(par: body): Observable<getListProduct>{
    return this.http.post<getListProduct>(this.url ,par)
  }
}
