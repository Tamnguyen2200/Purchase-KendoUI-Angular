import { Component, Input } from '@angular/core';
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';
import { UpdateProductService } from 'src/app/CallingAPI/update-product.service';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss']
})
export class AddNewDialogComponent {
  @Input() drawerRef!: DrawerComponent;
  constructor(
    public actionDialog: DataTransmissionService,
    public UpdateProductService: UpdateProductService,
  ){}
  public close(): void {
    this.actionDialog.isAddNewDialogOpen = false;
    this.drawerRef.toggle()
  }
  public open(): void {
    this.actionDialog.isAddNewDialogOpen = true;
  }
  public AddNew(): void{
    const updateRes = {
      DTO: {
        Code: 0,
        Barcode: this.actionDialog.addnewsp.Barcode,
        Price: this.actionDialog.addnewsp.Price,
        PriceBase: this.actionDialog.addnewsp.PriceBase,
      },
      Properties:[
        'Price', 
        'PriceBase'
      ]
    }
    this.UpdateProductService.getUpdateProduct(updateRes).subscribe((result) => {
      console.log(result);
    });
    this.actionDialog.isAddNewDialogOpen = false;
    this.drawerRef.toggle()
  }
 
}
