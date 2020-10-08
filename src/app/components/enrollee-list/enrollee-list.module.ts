import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeListComponent } from './enrollee-list.component';
import { EnrolleeCardComponent } from '../enrollee-card/enrollee-card.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EnrolleeCardComponent,
    EnrolleeListComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EnrolleeListComponent, EnrolleeCardComponent]
})
export class EnrolleeListModule { }