import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpClientModule
} from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
import {
  AppComponent
} from './app.component';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  AppRouterModule
} from './app-routing.module';
import {
  LayoutModule
} from './layout/layout.module';
import {
  SharedComponentModule
} from './shared-component/shared-component.module';
import {
  EnrolleeDetailsModule
} from './pages/enrollee-detail/enrollee-detail.module';
import {
  SearchModule
} from './pages/search/search.module';
import {
  EnrolleeListModule
} from './pages/enrollee-list/enrollee-list.module';

// import { CustomerReducer } from './store/employee.reducer';
// import { EnrolleeEffects } from './store/employee.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    SharedComponentModule,
    EnrolleeListModule,
    EnrolleeDetailsModule,
    SearchModule,
    LayoutModule
    // StoreModule.forRoot({applicationState: CustomerReducer}),
    // EffectsModule.forRoot([EnrolleeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
