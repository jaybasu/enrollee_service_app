import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ActivatedRoute
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
} from "@angular/forms";
import {
  Store
} from '@ngrx/store';
import {
  AppState
} from '../../models/app.state';
import * as EmployeeActions from '../../store/employee.actions';
import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-enrollee-detail',
  templateUrl: './enrollee-detail.component.html',
  styleUrls: ['./enrollee-detail.component.scss']
})
export class EnrolleeDetailComponent implements OnInit {
  @Output() update = new EventEmitter < Enrollee > ();

  private enrolleeId: string;
  public enrollee: Enrollee;

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z- ]*')]],
    status: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private enrolleeService: EnrolleeService,
    private fb: FormBuilder,
    private store: Store < AppState > ,
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
  getEnrolleeDetail(): void {
    this.enrolleeService.getEnrolleeDetail(this.enrolleeId)
      .subscribe(enrolleeDetail => {
        this.enrollee = enrolleeDetail;
        this.setData();
      });
  }

  goBack() {
    this.location.back();
  }

  updateEmployeeDetail() {
    if (this.editForm.valid) {
      this.enrollee.name = this.editForm.controls['name'].value;
      this.enrollee.active = this.editForm.controls['status'].value;
      this.store.dispatch(new EmployeeActions.updateEmployeeAction(this.enrollee));
      this.goBack();
    }
  }

}
