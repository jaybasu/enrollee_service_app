import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Enrollee} from '../../models/enrollee.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as EmployeeActions from '../../store/employee.actions';
import { Observable } from 'rxjs'
import { EmployeeService } from '../../services/employee.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  allEmployee$:Observable<any>;
  allEmployee: Enrollee[];

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
