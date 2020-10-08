import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EnrolleeCardComponent } from '../enrollee-card/enrollee-card.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EnrolleeCardComponent,
      EmployeeListComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EmployeeListComponent, EnrolleeCardComponent]
})
export class EnrolleeListModule { }