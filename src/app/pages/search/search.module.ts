import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { SearchComponent } from './search.component';
// import { EnrolleeCardComponent } from '../../shared-component/enrollee-card/enrollee-card.component';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
