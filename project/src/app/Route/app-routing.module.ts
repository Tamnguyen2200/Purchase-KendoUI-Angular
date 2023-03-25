import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagecomponentComponent } from '../reportPage/pagecomponent/pagecomponent.component';
import { ImportPageComponent } from '../importPage/import-page/import-page.component';
import { Item } from '../common/data';

const drawerRoutes  = [
  { 
    path: '', 
    component: PagecomponentComponent,
    text: "Danh sách báo cáo Excel" 
  },
  { 
    path: 'importPage', 
    component: ImportPageComponent, 
    text: "Import Excel"
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(drawerRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
