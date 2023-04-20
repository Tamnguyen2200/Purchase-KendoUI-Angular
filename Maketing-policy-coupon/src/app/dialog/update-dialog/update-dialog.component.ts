import { Component } from '@angular/core';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  constructor(public actionDialog: DataTransmissionService){}

  public data: any

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.actionDialog.isDialogOpen = false;
  }

  public open(): void {
    this.actionDialog.isDialogOpen = true;
  }
  ngOnInit() {
    this.data = this.actionDialog.getData('productData');
    console.log(this.data)
  }
}
