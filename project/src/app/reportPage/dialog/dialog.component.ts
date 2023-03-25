import { Component } from '@angular/core';

import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialogService: DialogService){}
  public importRepot(Year:string,Month:string){
    alert(Month+'/'+Year)
  };
}
