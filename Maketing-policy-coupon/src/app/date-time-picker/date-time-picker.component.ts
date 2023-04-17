import { Component, AfterViewInit, SimpleChanges } from '@angular/core';
import { AdaptiveMode } from '@progress/kendo-angular-dateinputs';
import { isPast } from 'date-fns';
declare var $: any;

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements AfterViewInit{
  public selectedDate: Date = new Date();
  public currentMonth: number = new Date().getMonth();
  public currentDay = new Date().getDate();
  public currentYear = new Date().getFullYear();
  public today: Date = new Date();
  public show = false;
  public isPopupOpen = false;
  public adaptiveMode: AdaptiveMode = "auto";
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
  showMenu = false;

  toggleMenu() {
    console.log('cjau')
    this.showMenu = !this.showMenu;
  }
  onOpen(){
    $( document ).ready(() => {
      console.log( "ready!" );
      // $('.ng-star-inserted').removeClass('.k-datetime-wrap')
      // $('.k-datetime-selector').append($('.TimePicker').clone());
    });
  }
  onFocus(){
    $(document).ready(() =>{
      $('.dropdownbtn').click(this.toggleMenu());
    })
  }
  // action(){
  //   console.log("ok")
  // }
  ngAfterViewInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
