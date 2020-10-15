import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
// import {
//   ActivatedRoute
// } from '@angular/router';

import {
  EnrolleeService
} from '../../services/enrollee.service';
import {
  Enrollee
} from '../../models/enrollee.model';
import {
  FormBuilder,
  Validators
} from "@angular/forms";
// import {
//   Store
// } from '@ngrx/store';
// import {
//   AppState
// } from '../../models/app.state';
// import * as EmployeeActions from '../../store/employee.actions';
import {
  Location
} from '@angular/common';
import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  // @Output() update = new EventEmitter < Enrollee > ();

  private _subscription: Subscription = new Subscription();

  private enrolleeId: string;
  public enrollee: Enrollee;

  searchForm = this.fb.group({
    search: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-]*')]]
  });

  constructor(
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder,
    // private store: Store < AppState > ,
    private location: Location
  ) {}

  ngOnInit() {}

  getEnrolleeDetail() {
    if (this.searchForm.valid) {
      this.enrolleeId = this.searchForm.controls['search'].value;
      this.enrolleeService.getEnrolleeDetail(this.enrolleeId);
        // .subscribe(enrolleeDetail => {
        //   this.enrollee = enrolleeDetail;
        //   console.log(this.enrollee);
        // });
    }
  }

  goBack() {
    this.location.back();
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
