import { Component, Input } from '@angular/core';
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';
import { UpdateProductService } from 'src/app/CallingAPI/update-product.service';


@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  @Input() drawerRef!: DrawerComponent;
  constructor(
    public actionDialog: DataTransmissionService,
    public UpdateProductService: UpdateProductService,
  ){}

  public data: any

  public close(): void {
    this.actionDialog.isUpdateDialogOpen = false;
    this.drawerRef.toggle()
  }
  public Update(): void{
    const updateRes = {
      DTO: {
        Code: this.actionDialog.product.Code,
        Barcode: this.actionDialog.product.Barcode,
        Price: this.actionDialog.price,
        PriceBase: this.actionDialog.pricebase,
      },
      Properties:[
        'Price', 
        'PriceBase'
      ]
    }
    this.UpdateProductService.getUpdateProduct(updateRes).subscribe((result) => {
      console.log(result);
    });
    this.actionDialog.isUpdateDialogOpen = false;
    this.drawerRef.toggle()
  }
  public open(): void {
    this.actionDialog.isUpdateDialogOpen = true;
  }
  ngOnInit() {
  }
}
