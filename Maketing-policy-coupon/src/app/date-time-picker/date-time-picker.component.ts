import { Component, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { AdaptiveMode, PopupSettings } from '@progress/kendo-angular-dateinputs';
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
  listItems: Array<string> = [];
  listAm: Array<string> = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];
listPm: Array<string> = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
];

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
  public popupClass = "font-arial";

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  onOpen(){
    $( document ).ready(() => {
      console.log( "ready!" );
      $('.k-calendar-classic').append($('#TimePicker'));
    });
    
  }
  onClose() {
      $('.display').append($('#TimePicker'))
  }
  onFocus(){
      $('.dropdownbtn').click(this.toggleMenu());
  }
  public onAM(){
    this.listItems = this.listAm
  }
  public onPM(){
    this.listItems = this.listPm
  }
  // action(){
  //   console.log("ok")
  // }
  ngAfterViewInit(): void {
    // $(document).ready(() => {
    //   $('#TimePicker').detach();
    // });
    // this.listItems = this.listPm;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
