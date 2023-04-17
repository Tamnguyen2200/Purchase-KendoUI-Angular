import { Component } from '@angular/core';
import { treeViewData } from '../Common/treeviewData';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-conditions-apply',
  templateUrl: './conditions-apply.component.html',
  styleUrls: ['./conditions-apply.component.scss']
})
export class ConditionsApplyComponent {
  public data: any[] = treeViewData
  public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
  public hasChildren = (dataItem: any): boolean => !!dataItem.items;
  public isDisabled: boolean = false;
  public isChecked: boolean = false;

  
  public check(){
    this.isDisabled = true
    this.isChecked = false;
  }
  public check2(){
    this.isDisabled = false
  }

}
