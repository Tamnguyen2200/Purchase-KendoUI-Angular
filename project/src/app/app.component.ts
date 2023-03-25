import { Component, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { DrawerSelectEvent, DrawerItemExpandedFn, DrawerItem, DrawerMode} from "@progress/kendo-angular-layout";
import { Router } from '@angular/router';
import { Item } from './common/data';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'project';
  constructor(
    private router: Router
  ){
    this.items = this.mapItems(router.config as Item[])
    this.items[0].selected = true;
  }
  public expanded = true;
  public items: Array<Item> = [];
  public mapItems(routes: Item[]): Item[]{
    return routes.map((item) => {
      return {
        text: item.text,
        path: item.path ? item.path : "",
      }
    })
  }
  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }
  ngAfterViewInit(){
    $('li.k-drawer-item.k-level-0.k-selected').css('height','50px')
    $('li.k-drawer-item.k-level-1.k-selected').css('height','50px')
    $('.k-drawer-item').css('height','50px')
  }
}

