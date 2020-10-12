import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  EnrolleeListComponent
} from './pages/enrollee-list/enrollee-list.component';
import {
  EnrolleeDetailComponent
} from './pages/enrollee-detail/enrollee-detail.component';
import {
  SearchComponent
} from './pages/search/search.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/enrollee-list',
    pathMatch: 'full'
  },
  {
    path: 'enrollee-list',
    component: EnrolleeListComponent,
    data: {
      heading: 'Enrollee List'
    }
  },
  {
    path: 'enrollee/:id',
    component: EnrolleeDetailComponent,
    data: {
      heading: 'Edit Enrollee'
    }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      heading: 'Search Enrollee'
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
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
