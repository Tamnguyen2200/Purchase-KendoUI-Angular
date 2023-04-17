import { Component } from '@angular/core';
import { BreadCrumbItem } from "@progress/kendo-angular-navigation";
import { defaultItems } from '../Common/items';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent {
  public items: BreadCrumbItem[] = [...defaultItems];
}
