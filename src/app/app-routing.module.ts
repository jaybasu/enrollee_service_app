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
} from './components/enrollee-list/enrollee-list.component';
import {
  EnrolleeDetailComponent
} from './components/enrollee-detail/enrollee-detail.component';
import {
  SearchComponent
} from './components/search/search.component';

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
