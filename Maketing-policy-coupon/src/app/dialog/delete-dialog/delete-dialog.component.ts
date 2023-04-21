import { Component, Input, OnInit } from '@angular/core';
import { DataTransmissionService } from 'src/app/Service/data-transmission.service';
import { GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit{
  constructor(public actionDialog: DataTransmissionService){}
  @Input() grid!: GridComponent;
  public data: any

  public close(): void {
    this.actionDialog.isDialogOpen = false;
  }
  public Delete(): void{
    // this.grid.remove(this.actionDialog.Item)
    this.actionDialog.isDialogOpen = false;
  }
  public open(): void {
    this.actionDialog.isDialogOpen = true;
  }
  ngOnInit() {
    console.log(this.data)
  }
}
