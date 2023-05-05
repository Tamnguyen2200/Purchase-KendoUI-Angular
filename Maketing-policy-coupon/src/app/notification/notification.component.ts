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

  public isClicked1:boolean = true;
  public isClicked2:boolean = false;
  public isClicked3:boolean = false;
  public inputValue: string = '';
  public inputEditorValue: string = '';
  public inputs: string[] = [];
  public inputsEditor: string[] = [];

  public onToggle(): void {
    this.show = !this.show;
  }

  ngAfterViewInit(): void {
    $('.k-time-list-container').html('<h1>Hello World!</h1>')
  }
  public btnSMS(index: number){
    this.isClicked1 = !this.isClicked1;
    this.isClicked2 = false;
    this.isClicked3 = false;
    this.inputValue = this.inputs[index];
    this.inputEditorValue = this.inputsEditor[index];
  }
  public btnMobile(index: number){
    this.isClicked2 = !this.isClicked2;
    this.isClicked1 = false;
    this.isClicked3 = false;
    this.inputValue = this.inputs[index];
    this.inputEditorValue = this.inputsEditor[index];
    
  }
  public btnCart(index: number){
    this.isClicked3 = !this.isClicked3;
    this.isClicked2 = false;
    this.isClicked1 = false;
    this.inputValue = this.inputs[index];
    this.inputEditorValue = this.inputsEditor[index];
  }
  public inputvalue(value:string){
    this.inputs.push(value);
  }
  public inputEditorvalue(value:string){
    this.inputsEditor.push(value);
  }
}
