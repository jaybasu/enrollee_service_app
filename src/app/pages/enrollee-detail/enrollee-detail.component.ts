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
  Validators
} from '@angular/forms';

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
    id: [''],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z- ]*')]],
    status: ['', Validators.required],
    dateOfBirth: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.enrolleeId = this.route.snapshot.paramMap.get('id');
    this.getEnrolleeDetail();
  }
  setData() {
    this.editForm.setValue({
      id: this.enrollee.id,
      name: this.enrollee.name,
      status: this.enrollee.active,
      dateOfBirth: this.enrollee.dateOfBirth
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
