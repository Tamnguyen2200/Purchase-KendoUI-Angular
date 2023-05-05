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
  public isClicked1:boolean = true;
  public isClicked2:boolean = false;
  public isClicked3:boolean = false;
  public inputValue: string = '';
  public inputconditionValue: string = '';
  public inputDercriptionValue: string = '';
  public inputsNameCoupon: string[] = [];
  public inputsconditionCoupon: string[] = [];
  public inputsDercriptionCoupon: string[] = [];

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
  onclick1(index: number){
    this.isClicked1 = !this.isClicked1;
    this.isClicked2 = false;
    this.isClicked3 = false;
    this.inputValue = this.inputsNameCoupon[index];
    this.inputconditionValue = this.inputsconditionCoupon[index];
    this.inputDercriptionValue = this.inputsDercriptionCoupon[index];
  }
  onclick2( index: number){
    this.isClicked2 = !this.isClicked2;
    this.isClicked1 = false;
    this.isClicked3 = false;
    this.inputValue = this.inputsNameCoupon[index];
    this.inputconditionValue = this.inputsconditionCoupon[index];
    this.inputDercriptionValue = this.inputsDercriptionCoupon[index];
  }
  onclick3(index: number){
    this.isClicked3 = !this.isClicked3;
    this.isClicked1 = false;
    this.isClicked2 = false;
    this.inputValue = this.inputsNameCoupon[index];
    this.inputconditionValue = this.inputsconditionCoupon[index];
    this.inputDercriptionValue = this.inputsDercriptionCoupon[index];
  }
  public inputvalue(value: string){
    this.inputsNameCoupon.push(value);
  }
  public inputConditionValue(value: string){
    this.inputsconditionCoupon.push(value);
  }
  public inputdercriptionValue(value: string){
    this.inputsDercriptionCoupon.push(value);
  }
}

