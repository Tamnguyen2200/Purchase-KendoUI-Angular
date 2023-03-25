import { Component } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { Listdata } from 'src/app/common/listdata';


@Component({
  selector: 'app-report-search',
  templateUrl: './report-search.component.html',
  styleUrls: ['./report-search.component.scss']
})
export class ReportSearchComponent {
  filterName: string = '';
  constructor(private searchService: SearchService){}
  ShareValue(){
    this.searchService.shareData.next(this.filterName);
  };
  listdata = Listdata;
  Reset(){
    this.filterName = ''
    this.searchService.clearData.next([true,false]);
    this.searchService.dataReset.next('');
  }
  
}
