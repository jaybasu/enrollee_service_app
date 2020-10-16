import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolleeListComponent } from './enrollee-list.component';
// import { RouterModule } from '@angular/router';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';


@NgModule({
  declarations: [EnrolleeListComponent],
  imports: [
    CommonModule,
    // RouterModule,
    SharedComponentModule
  ],
  exports: [EnrolleeListComponent]
})
export class EnrolleeListModule { }
