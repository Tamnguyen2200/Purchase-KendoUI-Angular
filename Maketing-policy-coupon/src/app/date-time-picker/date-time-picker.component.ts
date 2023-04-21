import { Component, AfterViewInit, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { AdaptiveMode, PopupSettings } from '@progress/kendo-angular-dateinputs';
import { isPast } from 'date-fns';
declare var $: any;

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements AfterViewInit{
  public currentMonth: number = new Date().getMonth();
  public currentYear = new Date().getFullYear();
  public today: Date = new Date();
  public isPopupOpen = false;
  public adaptiveMode: AdaptiveMode = "auto";
  public myDate: Date = new Date();
  public valuedefault: string = 'hh : mm';
  public valueTime: string = '';
  public listItems: Array<string> = [];
  public listAm: Array<string> = [
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
  public listPm: Array<string> = [
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
  public isClickedAM: boolean = false;
  public isClickedPM: boolean = false;
  public show = false;
  public ValueDateTime : Date = new Date();
  public isDisabled:boolean = false

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
  onOpenPopup(){
    this.show = !this.show;
  }
  onClose() {
      $('.display').append($('#TimePicker'))
  }
  public onAM(){
    this.listItems = this.listAm
    this.isClickedAM = !this.isClickedAM
    this.isClickedPM = false
    
  }
  public onPM(){
    this.listItems = this.listPm
    this.isClickedPM = !this.isClickedPM
    this.isClickedAM = false
  }
  // public valueChangeTime(value: any): void{
  //   this.today = value
  //   console.log(this.today)
  // }
  public onSelectionChange(valueTime: any) {
    this.valueTime = valueTime;
    this.ValueDateTime = new Date(`${this.today.toDateString()} ${this.valueTime}`)
  }
  onChangeValueInput(ValueInput: Date){
  }
  onChangeDate(ValueDate: Date){
    this.ValueDateTime = new Date(`${ValueDate.toDateString()} ${this.valueTime}`)

  }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
