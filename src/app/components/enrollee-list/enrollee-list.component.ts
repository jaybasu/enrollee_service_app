import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy, Output
} from '@angular/core';
import {
  Enrollee
} from '../../models/enrollee.model';
// import { Store } from '@ngrx/store';
// import { AppState } from '../../models/app.state';
// import * as EmployeeActions from '../../store/employee.actions';
import {
  Observable,
  Subscription
} from 'rxjs'
import {
  EnrolleeService
} from '../../services/enrollee.service'
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

  ngOnInit() {
    this.getAllEnrollee();
  }

  getAllEnrollee() {
    this._subscription = this.enrolleeService.getEnrollee()
      .subscribe(allEnrolleeData => {
        this.allEnrollee = allEnrolleeData;
      });
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
