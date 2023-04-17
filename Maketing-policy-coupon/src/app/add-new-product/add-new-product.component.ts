import { Component,ViewChild  } from '@angular/core';
import { DrawerItem, DrawerPosition, DrawerComponent  } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  public end!: DrawerPosition;
  @ViewChild('drawer') drawer: DrawerComponent | undefined;
  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { separator: true },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { separator: true },
    { text: "Attachments", icon: "k-i-envelop-link" },
    { text: "Favourites", icon: "k-i-star-outline" },
  ];

}
