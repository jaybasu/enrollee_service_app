import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeListComponent } from './enrollee-list.component';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnrolleeListComponent],
  imports: [
    CommonModule,
    SharedComponentModule,
    ReactiveFormsModule
  ],
  exports: [EnrolleeListComponent]
})
export class EnrolleeListModule { }
