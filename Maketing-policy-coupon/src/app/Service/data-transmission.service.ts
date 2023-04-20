import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransmissionService {

  constructor() { }
  private sharedData: any = {};
  public isDialogOpen = false;

  setData(key: string, value: any) {
    this.sharedData[key] = value;
  }
  
  getData(key: string) {
    return this.sharedData[key];
  }
}
