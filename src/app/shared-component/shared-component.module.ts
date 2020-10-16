import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { EnrolleeCardComponent } from './enrollee-card/enrollee-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormInlineErrorComponent } from './form-inline-error/form-inline-error.component';



@NgModule({
  declarations: [PaginationComponent, EnrolleeCardComponent, FormInlineErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [PaginationComponent, EnrolleeCardComponent, FormInlineErrorComponent]
})
export class SharedComponentModule { }
