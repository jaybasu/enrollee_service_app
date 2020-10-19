import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeListComponent } from './enrollee-list.component';
// import { RouterModule } from '@angular/router';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnrolleeListComponent],
  imports: [
    CommonModule,
    // RouterModule,
    SharedComponentModule,
    ReactiveFormsModule
  ],
  exports: [EnrolleeListComponent]
})
export class EnrolleeListModule { }
