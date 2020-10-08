import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EnrolleeListModule } from './components/enrollee-list/enrollee-list.module';
import { EnrolleeDetailComponent } from './components/enrollee-detail/enrollee-detail.component';
import { AppRouterModule } from './app-routing.module';
import { CustomerReducer } from './store/employee.reducer';
import { EnrolleeEffects } from './store/employee.effects';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    EnrolleeListModule,
    StoreModule.forRoot({applicationState: CustomerReducer}),
    EffectsModule.forRoot([EnrolleeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
