import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EnrolleeListComponent } from './components/enrollee-list/enrollee-list.component';
import { EnrolleeDetailComponent } from './components/enrollee-detail/enrollee-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/enrollee-list', pathMatch: 'full' },
  { path: 'enrollee-list', component: EnrolleeListComponent },
  { path: 'enrollee/:id', component: EnrolleeDetailComponent },
  { path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
