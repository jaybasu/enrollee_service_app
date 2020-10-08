import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EnrolleeCardComponent } from '../enrollee-card/enrollee-card.component'



@NgModule({
  declarations: [
    EnrolleeCardComponent,
      EmployeeListComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [EmployeeListComponent, EnrolleeCardComponent]
})
export class EnrolleeListModule { }