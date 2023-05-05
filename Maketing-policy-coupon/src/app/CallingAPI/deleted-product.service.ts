import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResponese } from '../DTO/getListProductInterface';
import { DeleteRes } from '../DTO/getListProductInterface';

@Injectable({
  providedIn: 'root'
})
export class DeletedProductService {
  private url = "http://test.lapson.vn/api/product/DeleteListProduct";
  constructor(private http: HttpClient) { }
  public getDeletedProduct(code: [DeleteRes]): Observable<DeleteResponese>{
    return this.http.post<DeleteResponese>(this.url, code)
  }
}
