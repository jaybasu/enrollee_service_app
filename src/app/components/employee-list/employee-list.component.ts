import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ViewEmployee, EditEmployee } from '../../models/employee.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as EmployeeActions from '../../store/employee.actions';
import { Observable } from 'rxjs'
import { EmployeeService } from '../../services/employee.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  allEmployee$:Observable<any>;
  allEmployee: ViewEmployee[];

  constructor(private store: Store<AppState>) {
    this.allEmployee$ = this.store.select('applicationState');
  }

  ngOnInit() {
    this.getAllEmployee();
    this.allEmployee$.subscribe((state:AppState) => this.allEmployee = state.employee);
  }

  getAllEmployee() {
    this.store.dispatch(new EmployeeActions.loadEmployeeListAction());
  }
  // constructor(
  //   // private router: Router, 
  //   private employeeService: EmployeeService) { }

  // ngOnInit() {
  //   this.employeeService.getEmployee()
  //     .subscribe( data => {
  //       this.allEmployee = data;
  //     });
  // }
}
