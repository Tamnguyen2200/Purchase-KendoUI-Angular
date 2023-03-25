import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from '@progress/kendo-angular-dialog';



import { AppRoutingModule } from './Route/app-routing.module';
import { AppComponent } from './app.component';
import { PagecomponentComponent } from './reportPage/pagecomponent/pagecomponent.component';
import { ImportPageComponent } from './importPage/import-page/import-page.component';
import { MenutopComponent } from './menutop/menutop.component';
import { ReportSearchComponent } from './reportPage/report-search/report-search.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TableComponent } from './reportPage/table/table.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogComponent } from './reportPage/dialog/dialog.component';
import { ImportSearchComponent } from './importPage/import-search/import-search.component';
import { ImportTableComponent } from './importPage/import-table/import-table.component';






@NgModule({
  declarations: [
    AppComponent,
    PagecomponentComponent,
    ImportPageComponent,
    MenutopComponent,
    ReportSearchComponent,
    TableComponent,
    DialogComponent,
    ImportSearchComponent,
    ImportTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    NavigationModule,
    IconsModule,
    LayoutModule,
    ListViewModule,
    MatIconModule,
    FormsModule,
    GridModule,
    DialogsModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
