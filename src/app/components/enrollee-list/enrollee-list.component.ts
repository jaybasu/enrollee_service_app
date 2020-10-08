import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Enrollee} from '../../models/enrollee.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import * as EmployeeActions from '../../store/employee.actions';
import { Observable } from 'rxjs'
import { EmployeeService } from '../../services/enrollee.service'
@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit {
  allEnrollee$:Observable<any>;
  allEnrollee: Enrollee[];

  constructor(private store: Store<AppState>) {
    this.allEnrollee$ = this.store.select('applicationState');
  }

  ngOnInit() {
    this.getAllEnrollee();
    this.allEnrollee$.subscribe((state:AppState) => this.allEnrollee = state.employee);
  }

  getAllEnrollee() {
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
