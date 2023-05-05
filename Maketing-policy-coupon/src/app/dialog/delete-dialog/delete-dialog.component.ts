import { Component, Input, OnInit } from '@angular/core';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';
import { GridComponent } from '@progress/kendo-angular-grid';
import { DeletedProductService } from 'src/app/CallingAPI/deleted-product.service';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { LisProductService } from 'src/app/CallingAPI/lis-product.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit{
  constructor(
    public actionDialog: DataTransmissionService,
    public DeletedProductService: DeletedProductService,   
    public ListService: LisProductService,
  ){}
  @Input() grid!: GridComponent;
  public data: any

  public close(): void {
    this.actionDialog.isDeletetDialogOpen = false;
  }

  public Delete(): void{
    const DeleteRes = {
      code: this.actionDialog.sp.Code
    }
    this.DeletedProductService.getDeletedProduct([DeleteRes]).subscribe((value) =>{
      const body = {
        page: 1,
        pageSize: 15, 
        filter: '',
        sort:'',
      }
      this.ListService.getlistProduct(body).subscribe((value) =>{
        this.actionDialog.girdData = {
          data : value.ObjectReturn?.Data!,
          total: value.ObjectReturn?.Total!
        }
      })
      this.actionDialog.isDeletetDialogOpen = false;
    })
    
  }
  public open(): void {
    this.actionDialog.isDeletetDialogOpen = true;
  }
  ngOnInit() {
  }
}
