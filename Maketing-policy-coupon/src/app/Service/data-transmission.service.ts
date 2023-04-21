import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransmissionService {

  constructor() { }
  public isDialogOpen = false;
  public TenSP: string = '';
  public MaSP: string = ''
  public Item: any
}
