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
  EmployeeService
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

  private employeeId: string;
  public employee: Enrollee;

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    status: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private store: Store < AppState > ,
    private location: Location
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.getCustomer();
  }
  setData() {
    this.editForm.setValue({
      name: this.employee.name,
      status: this.employee.active
    });
  }
  getCustomer(): void {
    this.employeeService.getCustomer(this.employeeId)
      .subscribe(employeeDetail => {
        this.employee = employeeDetail;
        this.setData();
      });
  }

  goBack() {
    this.location.back();
  }

  updateEmployeeDetail() {
    if (this.editForm.valid) {
      this.employee.name = this.editForm.controls['name'].value;
      this.employee.active = this.editForm.controls['status'].value;
      this.store.dispatch(new EmployeeActions.updateEmployeeAction(this.employee));
      this.goBack();
    }
  }

}
