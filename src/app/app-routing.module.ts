import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EmployeeListComponent } from './components/enrollee-list/enrollee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/enrollee-list', pathMatch: 'full' },
  { path: 'enrollee-list', component: EmployeeListComponent },
  { path: 'enrollee/:id', component: EmployeeDetailComponent },
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
