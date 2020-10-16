import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';
import { EnrolleeDetailComponent } from './enrollee-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnrolleeDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  exports: [EnrolleeDetailComponent]
})
export class EnrolleeDetailsModule { }
