import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerItemExpandedFn, DrawerMode, DrawerSelectEvent } from '@progress/kendo-angular-layout';

import { items } from './Common/items';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Maketing-policy-coupon';
  @ViewChild('rightDrawer') rightDrawer!: DrawerComponent;
  public expandMode: DrawerMode = "overlay";
  public expanded:boolean = false;
  public selected = "CHÍNH SÁCH";
  public items: Array<DrawerItem> = items;
  public expandedIndices = [3];
  

  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };
  public onSelect(ev: DrawerSelectEvent): void{
    this.selected = ev.item.text;
  }
  ngAfterViewInit(){
    $('.k-drawer-item.k-level-1').css({'background-color':'#1A2334', 'color': '#959DB3'})
    $('li.k-drawer-item.k-level-0.k-selected').css('height','45px')
    $('li.k-drawer-item.k-level-1.k-selected').css('height','45px')
    $('.k-drawer-item').css('height','45px')
    $('.k-drawer-item.k-selected').addClass('hightling')
    $('.k-drawer-item.k-selected.hightling').css({'background-color':'#1A2334'})
  }
}
