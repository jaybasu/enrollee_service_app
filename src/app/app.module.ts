import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { EnrolleeListModule } from './components/enrollee-list/enrollee-list.module.ts_';
import { EnrolleeDetailComponent } from './components/enrollee-detail/enrollee-detail.component';
import { AppRouterModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';
import { EnrolleeListComponent } from './components/enrollee-list/enrollee-list.component';
// import { SearchModule } from './components/search/search.module.ts_';
import { EnrolleeCardComponent } from './components/enrollee-card/enrollee-card.component';
import { SearchComponent } from './components/search/search.component';

// import { CustomerReducer } from './store/employee.reducer';
// import { EnrolleeEffects } from './store/employee.effects';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleeDetailComponent,
    EnrolleeListComponent,
    EnrolleeCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    // EnrolleeListModule,
    LayoutModule
    // SearchModule
    // StoreModule.forRoot({applicationState: CustomerReducer}),
    // EffectsModule.forRoot([EnrolleeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
