import { Component, OnInit } from '@angular/core';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit{
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
