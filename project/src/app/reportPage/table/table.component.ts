import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { PagerPosition } from '@progress/kendo-angular-listview';
import { PagerType } from '@progress/kendo-angular-pager';
import { CompositeFilterDescriptor,FilterDescriptor,filterBy } from '@progress/kendo-data-query';


import { data, Item } from 'src/app/common/data';
import { Listdata } from 'src/app/common/listdata';
import { DialogService } from 'src/app/service/dialog.service';
import { SearchService } from 'src/app/service/search.service';




declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit{
  [x: string]: any;
  public gridData: data[] = Listdata ;
  public pageSize = 10;
  public skip = 0;
  public sizes = [10, 20, 30];
  public type: PagerType = 'numeric';
  public info = false;
  public buttonCount = 10;
  public pageSizes = true;
  public position: PagerPosition = "bottom"




  constructor(
    public dialogService: DialogService,
    public srearchService: SearchService
    ) {
  
    
  }
  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
  }
  data = [
   { text: 'Xuất ra Excel'}
  ]
  public gridFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: []
  };
  filterName = '';
   listdata = Listdata;
  ngOnInit(){
    this.srearchService.shareData.subscribe(value =>{
      this.filterName = value
      console.log(this.filterName)
      this.gridFilter = {
        logic: 'and',
        filters:[
          {
            field: 'reportName',
            operator: 'contains',
            value: this.filterName
          }
        ]
      };
      this.gridData = filterBy(this.listdata, this.gridFilter)
    })
    this.srearchService.dataReset.subscribe(value =>{
      this.filterName = value
      this.listdata = Listdata
    })
  }

  ngAfterViewInit(){
    $('thead.k-table-thead').css({
      'background-color':'#EDEFF3',
      height: '40px',
      'font-weight': '700',
    })
    $('.k-pager-first').html('<span>Đầu</span>');
    $('.k-pager-last').html('<span>Cuối</span>');
    $('.k-button-solid-base.k-selected').css({
      'background-color': '#BDC2D2',
      'color': '#ffffff'
    })
  }
}
    
