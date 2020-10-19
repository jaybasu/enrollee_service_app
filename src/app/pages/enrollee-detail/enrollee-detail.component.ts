import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  EnrolleeService
} from '../../services/enrollee.service';
import {
  Enrollee
} from '../../models/enrollee.model';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Store
} from '@ngrx/store';
// import {
//   AppState
// } from '../../models/app.state.ts_';
// import * as EmployeeActions from '../../store/employee.actions';
import {
  formErrors
} from '../../constants/form-error.constants';
import {
  Location
} from '@angular/common';
import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-enrollee-detail',
  templateUrl: './enrollee-detail.component.html',
  styleUrls: ['./enrollee-detail.component.scss']
})
export class EnrolleeDetailComponent implements OnInit, OnDestroy {
  @Output() update = new EventEmitter < Enrollee > ();
  formErrors = formErrors;
  isFormSubmitted = false;

  private subscription: Subscription = new Subscription();

  private enrolleeId: string;
  public enrollee: Enrollee;

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z- ]*')]],
    status: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder,
    // private store: Store < AppState > ,
    private location: Location
  ) {}

  ngOnInit() {
    this.enrolleeId = this.route.snapshot.paramMap.get('id');
    this.getEnrolleeDetail();
  }
  setData() {
    this.editForm.setValue({
      name: this.enrollee.name,
      status: this.enrollee.active
    });
  }
  getEnrolleeDetail() {
    this.subscription.add(this.enrolleeService.getEnrolleeDetail(this.enrolleeId)
      .subscribe(
        enrolleeDetail => {
          if (enrolleeDetail) {
            this.enrollee = enrolleeDetail;
            this.setData();
          } else {
            alert('Unable to display User Details');
            this.router.navigate(['./enrollee-list']);
          }
        }
      ));
  }

  goBack() {
    this.location.back();
  }

  updateEnrolleeDetail() {
    this.isFormSubmitted = true;
    if (this.editForm.valid) {
      this.enrollee.name = this.editForm.controls.name.value;
      this.enrollee.active = this.editForm.controls.status.value;
      // this.store.dispatch(new EmployeeActions.updateEmployeeAction(this.enrollee));
      this.subscription.add(this.enrolleeService.updateEnrolleeDetail(this.enrollee)
        .subscribe((updatedEnrollee) => {
          return updatedEnrollee;
        }));
      this.goBack();
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
