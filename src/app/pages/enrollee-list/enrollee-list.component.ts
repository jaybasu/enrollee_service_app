import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Output,
  Input
} from '@angular/core';
import {
  Enrollee
} from '../../models/enrollee.model';
// import { Store } from '@ngrx/store';
// import { AppState } from '../../models/app.state';
// import * as EmployeeActions from '../../store/employee.actions';
import {
  from,
  Observable,
  Subscription
} from 'rxjs';
import {
  EnrolleeService
} from '../../services/enrollee.service';
import {
  MyPagination
} from '../../models/pagination.model'

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  // allEnrollee$: Observable < any > ;
  allEnrollee: Enrollee[];


  // constructor(private store: Store<AppState>) {
  //   this.allEnrollee$ = this.store.select('applicationState');
  // }

  // ngOnInit() {
  //   this.getAllEnrollee();
  //   this.allEnrollee$.subscribe((state:AppState) => this.allEnrollee = state.enrollee);
  // }

  // getAllEnrollee() {
  //   this.store.dispatch(new EmployeeActions.loadEmployeeListAction());
  // }
  constructor(
    private enrolleeService: EnrolleeService) {}
  currentPageNumber = 1;
  currentPageSize = 10;
  currentEnrollee;

  ngOnInit() {
    this.getAllEnrollee();
  }

  goToPage(pageNumber) {
    this.currentPageNumber = pageNumber;
    this.currentEnrollee = this.allEnrollee.slice(
      (this.currentPageNumber - 1) * this.currentPageSize, (this.currentPageNumber - 1) * this.currentPageSize + this.currentPageSize
    );
  }

  getAllEnrollee() {
    this._subscription = this.enrolleeService.getEnrollee()
      .subscribe(allEnrolleeData => {
        this.allEnrollee = allEnrolleeData;
        this.currentEnrollee = this.allEnrollee.slice(
          (this.currentPageNumber - 1) * this.currentPageSize, (this.currentPageNumber - 1) * this.currentPageSize + this.currentPageSize
        );
      });
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
