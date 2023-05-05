import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerItemExpandedFn, DrawerMode, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { items } from './Common/items';
import { ProductService } from './CallingAPI/product.service';
import { DataTransmissionService } from './Service/data-transmission.service';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Maketing-policy-coupon';

  constructor(
    public DataTransmission: DataTransmissionService,
    public ProductService:ProductService,
  ){

  }
  @ViewChild('rightDrawer') rightDrawer!: DrawerComponent;
  @ViewChild('leftDrawer') leftDrawer!: DrawerComponent;

  public expandMode: DrawerMode = "overlay";
  public expanded:boolean = false;
  public selected = "CHÍNH SÁCH";
  public items: Array<DrawerItem> = items;
  public expandedIndices = [3];
  public newProduct: any;
  public isClicked: boolean= true;
  public valueBarcode = '';
  public valueNameProduct = '' ;
  public valuePrice = '';
  public valuePriceBase = '';
  public valueImage = '';
  public titleDrawer = 'THÊM MỚI SẢN PHẨM';
  public condition:boolean = true;
  public isDisabled:boolean = false;

  public PassData(): void {
    this.valueBarcode = this.newProduct.Barcode
    this.valueNameProduct = this.newProduct.ProductName
    this.valuePriceBase = this.newProduct.PriceBase
    this.valuePrice = this.newProduct.Price
    this.valueImage = this.newProduct.ImageThumb
  }
  public onExpandChange(e: boolean): void {
    if (this.DataTransmission.ischangetitile == true){
      this.titleDrawer = 'CHỈNH SỬA SẢN PHẨM'
      this.condition = !this.condition
      this.isDisabled = true
      this.valueBarcode = this.DataTransmission.product.Barcode
      this.valueNameProduct = this.DataTransmission.product.ProductName
      this.valuePriceBase = this.DataTransmission.product.PriceBase
      this.valuePrice = this.DataTransmission.product.Price
      this.valueImage = this.DataTransmission.product.ImageThumb
    } 
    else if(this.DataTransmission.ischangetitile == false){
      this.titleDrawer = 'THÊM MỚI SẢN PHẨM'
      this.isDisabled = false
      this.valueBarcode = '';
      this.valueNameProduct = '';
      this.valuePriceBase = '';
      this.valuePrice = '';
      this.valueImage = '';
    }
  }
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };
  public InputProduct(barcodeProduct: string){
    const parmaNewProduct = {
      code: 0,
      Barcode: barcodeProduct
    }
    this.ProductService.getProduct(parmaNewProduct).subscribe((value) =>{
      this.newProduct = value.ObjectReturn
      this.DataTransmission.addnewsp = this.newProduct
      this.PassData()
    })
  }
  public InputPriceProduct(valuePrice: string){
    this.DataTransmission.price = valuePrice
  }
  public InputPriceBaseProduct(valuePriceBase: string){
    this.DataTransmission.pricebase = valuePriceBase
  }
  public addNew(){
    this.DataTransmission.isAddNewDialogOpen = true;
  }
  public Update(){
    this.DataTransmission.isUpdateDialogOpen = true;
  }
  public close(){
    this.valueBarcode = '';
    this.valueNameProduct = '';
    this.valuePriceBase = '';
    this.valuePrice = '';
    this.valueImage = '';
    // this.product = !this.product;
    this.rightDrawer.toggle()
  }
  public clickbtn(){
    this.isClicked = !this.isClicked
    this.leftDrawer.toggle()
  }
  public onSelect(ev: DrawerSelectEvent): void{
    this.selected = ev.item.text;
    const current = ev.item.id;

    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter(
        (id) => id !== current
      );
    } else {
      this.expandedIndices.push(current);
    }
  }
  ngAfterViewInit(){
    // $('.k-drawer-item.k-level-1').css({'background-color':'#1A2334', 'color': '#959DB3'})
    $('li.k-drawer-item.k-level-0.k-selected').css('height','45px')
    $('li.k-drawer-item.k-level-1.k-selected').css('height','45px')
    $('.k-drawer-item').css('height','45px')
    // $('.k-drawer-item.k-selected').addClass('hightling')
    // $('.k-drawer-item.k-selected.hightling').css({'background-color':'#1A2334'})
  }
}
