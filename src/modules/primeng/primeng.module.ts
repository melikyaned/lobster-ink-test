import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartModule } from 'primeng/organizationchart';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizationChartModule,
  ],
  exports: [
    OrganizationChartModule
  ]
})
export class PrimengModule { }
