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

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private enrolleeId: string;
  allEnrollee: Enrollee[];

  searchForm = this.fb.group({
    search: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-]*')]]
  });

  constructor(
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder) {}
  searchClicked = false;
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
    if (this.searchForm.valid) {
      this.searchClicked = true;
      this.enrolleeId = this.searchForm.controls.search.value;
      this.subscription.add(this.enrolleeService.getEnrolleeDetail(this.enrolleeId)
        .subscribe(enrolleeDetail => {
          this.currentEnrollee = [];
          this.currentEnrollee.push(enrolleeDetail);
          console.log(this.allEnrollee);
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
    if (this.searchForm.controls.search.value && this.searchClicked) {
      this.searchForm.controls.search.setValue('');
      this.getAllEnrollee();
    } else {
      this.searchForm.controls.search.setValue('');
      return;
    }

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
