import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { BreadCrumbModule } from '@progress/kendo-angular-navigation';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { GridLayoutModule } from '@progress/kendo-angular-layout';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule  } from '@progress/kendo-angular-intl';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { EditorModule } from '@progress/kendo-angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons'; 
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from "@progress/kendo-angular-popup";

import "@progress/kendo-angular-intl/locales/de/all";
import "@progress/kendo-angular-intl/locales/vi/all";

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { OptionalComponent } from './optional/optional.component';
import { InformationCouponComponent } from './information-coupon/information-coupon.component';
import { ConditionsApplyComponent } from './conditions-apply/conditions-apply.component';
import { NotificationComponent } from './notification/notification.component';
import { PROGRAMDETAILSINFORMATIONComponent } from './program-details-information/program-details-information.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AddNewDialogComponent } from './dialog/add-new-dialog/add-new-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    OptionalComponent,
    InformationCouponComponent,
    ConditionsApplyComponent,
    NotificationComponent,
    PROGRAMDETAILSINFORMATIONComponent,
    DateTimePickerComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
    DatePickerComponent,
    AddNewDialogComponent
  ],
  imports: [
    BrowserModule,
    DrawerModule,
    BrowserAnimationsModule,
    AppBarModule,
    BreadCrumbModule,
    ButtonModule,
    ButtonGroupModule,
    IconsModule,
    GridLayoutModule,
    DateInputsModule,
    FormsModule,
    EditorModule,
    GridModule,
    IntlModule,
    TreeViewModule,
    HttpClientModule,
    DropDownButtonModule,
    DialogsModule,
    ComboBoxModule,
    PopupModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "vi-VN" }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
