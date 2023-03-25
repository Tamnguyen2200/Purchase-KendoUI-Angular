import { Component } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { listImport } from 'src/app/common/listdata';

@Component({
  selector: 'app-import-search',
  templateUrl: './import-search.component.html',
  styleUrls: ['./import-search.component.scss']
})
export class ImportSearchComponent {
  filterName: string = '';
  constructor(private searchService: SearchService){}
  ShareValue(){
    this.searchService.shareData.next(this.filterName);
  };
  listdata = listImport;
  Reset(){
    this.filterName = ''
    this.searchService.clearData.next([true,false]);
    this.searchService.dataReset.next('');
  }
}
