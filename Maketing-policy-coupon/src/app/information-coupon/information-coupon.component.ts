import { Component } from '@angular/core';
import { isPast } from 'date-fns';

@Component({
  selector: 'app-information-coupon',
  templateUrl: './information-coupon.component.html',
  styleUrls: ['./information-coupon.component.scss']
})
export class InformationCouponComponent {
  public selectedDate: Date = new Date();
  public currentMonth: number = new Date().getMonth();
  public currentDay = new Date().getDate();
  public currentYear = new Date().getFullYear();
  public today: Date = new Date();
  public showVN:boolean = false;
  public showJS:boolean = true;
  public showEL:boolean = true;
  public isClicked1:boolean = true;
  public isClicked2:boolean = false;
  public isClicked3:boolean = false;

  public onNavigate(event: any): void {
    this.currentMonth = event.focusedDate.getMonth();
  }
  public disabledDates = (date: Date): boolean => {
    return isPast(date) && !this.isToday(date);
  };
  public isToday(date: Date): boolean {
    return date.getDate() === this.today.getDate() &&
      date.getMonth() === this.today.getMonth() &&
      date.getFullYear() === this.today.getFullYear();
  }
  onclick1(){
    this.isClicked1 = !this.isClicked1;
    this.isClicked2 = false;
    this.isClicked3 = false;
    this.showVN = false;
    this.showJS = true;
    this.showEL = true;
  }
  onclick2(){
    this.isClicked2 = !this.isClicked2;
    this.isClicked1 = false;
    this.isClicked3 = false;
    this.showVN = true;
    this.showJS = false;
    this.showEL = true;
  }
  onclick3(){
    this.isClicked3 = !this.isClicked3;
    this.isClicked1 = false;
    this.isClicked2 = false;
    this.showVN = true;
    this.showJS = true;
    this.showEL = false;
  }
}

