import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }
  public opened = false;
  public open(opened: boolean): void {
    this.opened = !this.opened;
  }
  public closeDialog(isdisplay: boolean){
    this.opened = false
  }
}
