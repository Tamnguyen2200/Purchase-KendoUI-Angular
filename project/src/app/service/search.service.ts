import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  shareData = new Subject<any>();
  clearData = new Subject<any>();
  dataReset = new Subject<any>();
}
