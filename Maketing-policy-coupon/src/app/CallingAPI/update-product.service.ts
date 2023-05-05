import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateRes, UpdateResponese } from '../DTO/getListProductInterface';


@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  private url = "http://test.lapson.vn/api/product/UpdateProduct";
  constructor(private http: HttpClient) { }
  public getUpdateProduct(para: UpdateRes): Observable<UpdateResponese>{
    return this.http.post<UpdateResponese>(this.url, para)
  }
}
