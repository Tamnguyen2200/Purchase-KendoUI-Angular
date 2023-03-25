import { Component, AfterViewInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { PagerPosition } from '@progress/kendo-angular-listview';
import { PagerType } from '@progress/kendo-angular-pager';
import { CompositeFilterDescriptor,FilterDescriptor,filterBy } from '@progress/kendo-data-query';

import { data, dataImport, Item } from 'src/app/common/data';
import { listImport } from 'src/app/common/listdata';
import { DialogService } from 'src/app/service/dialog.service';
import { SearchService } from 'src/app/service/search.service';
declare var $: any;
@Component({
  selector: 'app-import-table',
  templateUrl: './import-table.component.html',
  styleUrls: ['./import-table.component.scss']
})
export class ImportTableComponent implements AfterViewInit{
  
  public gridData: dataImport[] = listImport ;
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
  printa(){
    alert('you chose Download template')
  }
  printb(){
    alert('you chose Import Excel')
  }
  filterName = '';
  listdata = listImport;
 ngOnInit(){
   this.srearchService.shareData.subscribe(value =>{
     this.filterName = value
     console.log(this.filterName)
     this.gridFilter = {
       logic: 'and',
       filters:[
         {
           field: 'importName',
           operator: 'contains',
           value: this.filterName
         }
       ]
     };
     this.gridData = filterBy(this.listdata, this.gridFilter)
   })
   this.srearchService.dataReset.subscribe(value =>{
     this.filterName = value
     this.listdata = listImport
   })
 }


  ngAfterViewInit(): void {
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
