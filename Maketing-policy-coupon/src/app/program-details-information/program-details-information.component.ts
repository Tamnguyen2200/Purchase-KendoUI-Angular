import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { GridDataResult, PageChangeEvent, PagerType } from '@progress/kendo-angular-grid';
import { LisProductService } from '../CallingAPI/lis-product.service';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { ProductService } from '../CallingAPI/product.service';
declare var $: any;
@Component({
  selector: 'app-program-details-information',
  templateUrl: './program-details-information.component.html',
  styleUrls: ['./program-details-information.component.scss']
})
export class PROGRAMDETAILSINFORMATIONComponent implements AfterViewInit {
  @Input() drawerRef!: DrawerComponent;
  @Output() dataReceivedEvent = new EventEmitter<any>()
  public gridData!: GridDataResult;
  public sizes = [15, 30, 50];
  public page: number = 0;
  public type: PagerType = 'numeric';
  public buttonCount = 3;
  public skip = 0;
  public take = 15;
  loading: boolean = false;
  public filterName = '';

  toggle(){
    this.drawerRef.toggle();
  }
  edit(coder: number){
    const parma ={
      code: coder
    }
    this.ProductService.getlistProduct(parma).subscribe((value) =>{
      this.dataReceivedEvent.emit(value.ObjectReturn)
      this.drawerRef.toggle();
    })
  }
  pageChange(event: PageChangeEvent){
    this.skip = event.skip;
    this.take = event.take;
    this.page = this.skip / this.take + 1
    this.ngOnInit()
  }
  ngAfterViewInit(): void {
    $('thead.k-table-thead').css({
      'background-color':'#EDEFF3',
    })
    $('.k-pager-first').html('<span>Đầu</span>');
    $('.k-pager-last').html('<span>Cuối</span>');
  }
  constructor(
    public ListService: LisProductService,
    public ProductService:ProductService
    ) {
  }

  public fil: DataSourceRequestState = {
    filter:{
      logic: "and",
      filters: [],
    }
  };
  public onSearch(filterName: string): void{
    this.fil.filter = {
      logic: "and",
      filters:[
        { field: 'ProductName', operator: 'contains', value: filterName },
        { field: 'Barcode', operator: 'contains', value: filterName },
        { field: 'Poscode', operator: 'contains', value: filterName },
      ]
    }
    this.ngOnInit()
  }
  
  public ngOnInit(): void {
    this.loading = true;
    const body = {
      page: this.page,
      pageSize: this.take, 
      filter: toDataSourceRequestString(this.fil),
      sort:'',
    }
    this.ListService.getlistProduct(body).subscribe((value) =>{
      this.gridData = {
        data : value.ObjectReturn?.Data!,
        total: value.ObjectReturn?.Total!
      }
      this.loading = false;
    })
  }

}
