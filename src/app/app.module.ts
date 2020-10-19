import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AppComponent
} from './app.component';
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
  EnrolleeListModule
} from './pages/enrollee-list/enrollee-list.module';

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
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
