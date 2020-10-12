import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { EnrolleeCardComponent } from './enrollee-card/enrollee-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PaginationComponent, EnrolleeCardComponent],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [PaginationComponent, EnrolleeCardComponent]
})
export class SharedComponentModule { }
