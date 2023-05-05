import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { DeletedProductService } from 'src/app/CallingAPI/deleted-product.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransmissionService {

  constructor(public DeletedProductService: DeletedProductService,   ) { }
  //Truyèn dữ liệu từ Program-details-information đến dialog
  public girdData!: GridDataResult;
  public isDeletetDialogOpen = false;
  public isUpdateDialogOpen = false;
  public isAddNewDialogOpen = false;
  public sp: any;
  public addnewsp: any;

  // Truyền dữ liệu từ Program-details-information đến app
  public product: any;
  public ischangetitile: boolean = false;
  public price: any;
  public pricebase: any;

  // gọi hàm xóa trong dialog 

}
