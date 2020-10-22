import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Enrollee
} from '../../models/enrollee.model';

import {
  Subscription
} from 'rxjs';
import {
  EnrolleeService
} from '../../services/enrollee.service';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  formErrors
} from 'src/app/constants/form-error.constants';

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private enrolleeId: string;
  allEnrollee: Enrollee[];
  formErrors = formErrors;
  isFormSubmitted = false;

  searchForm = this.fb.group({
    search: ['', [Validators.required, Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]]
  });

  constructor(
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder) {}
  currentPageNumber = 1;
  currentPageSize = 12;
  currentEnrollee;

  ngOnInit() {
    this.getAllEnrollee();
  }

  goToPage(pageNumber) {
    this.currentPageNumber = pageNumber;
    this.currentEnrollee = this.getCurrentEnrollee();
  }
  getEnrolleeDetail() {
    this.isFormSubmitted = true;
    if (this.searchForm.controls.search.value && this.searchForm.valid) {
      this.enrolleeId = this.searchForm.controls.search.value;
      this.subscription.add(this.enrolleeService.getEnrolleeDetail(this.enrolleeId)
        .subscribe(enrolleeDetail => {
          this.currentEnrollee = [];
          this.currentEnrollee.push(enrolleeDetail);
        }));
    }
  }

  getAllEnrollee() {
    this.subscription.add(this.enrolleeService.getEnrollee()
      .subscribe(allEnrolleeData => {
        this.currentEnrollee = [];
        this.allEnrollee = allEnrolleeData;
        this.currentEnrollee = this.getCurrentEnrollee();
      }));
  }

  getCurrentEnrollee() {
    return this.allEnrollee.slice(
      (this.currentPageNumber - 1) * this.currentPageSize, (this.currentPageNumber - 1) * this.currentPageSize + this.currentPageSize
    );
  }
  loadAllEnrollee() {
    if (this.isFormSubmitted) {
      this.isFormSubmitted = false;
      this.searchForm.reset();
      this.getAllEnrollee();
    } else {
      return;
    }

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
