import { Component, AfterViewInit,ViewChild} from '@angular/core';
import { AdaptiveMode } from '@progress/kendo-angular-dateinputs';
import { isPast } from 'date-fns';
import { PopupComponent } from '@progress/kendo-angular-popup';
declare var $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements AfterViewInit{

  public show = false;

  public isdisplay1:boolean = false;
  public isdisplay2:boolean = true;
  public isdisplay3:boolean = true;
  public isClicked1:boolean = true;
  public isClicked2:boolean = false;
  public isClicked3:boolean = false;

  public onToggle(): void {
    this.show = !this.show;
  }

  ngAfterViewInit(): void {
    $('.k-time-list-container').html('<h1>Hello World!</h1>')
  }
  public btnSMS(){
    this.isClicked1 = !this.isClicked1;
    this.isClicked2 = false;
    this.isClicked3 = false;
    this.isdisplay1 = false;
    this.isdisplay2 = true;
    this.isdisplay3 = true;
  }
  public btnMobile(){
    this.isClicked2 = !this.isClicked2;
    this.isClicked1 = false;
    this.isClicked3 = false;
    this.isdisplay1 = true;
    this.isdisplay2 = false;
    this.isdisplay3 = true;
  }
  public btnCart(){
    this.isClicked3 = !this.isClicked3;
    this.isClicked2 = false;
    this.isClicked1 = false;
    this.isdisplay1 = true;
    this.isdisplay2 = true;
    this.isdisplay3 = false;
  }
}
