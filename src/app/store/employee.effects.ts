import { Injectable } from "@angular/core";
import { EnrolleeService } from "../services/enrollee.service";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import * as types from './action.types';
import * as employeeActions from './employee.actions';

@Injectable({
  providedIn: 'root'
})
export class CustomerEffects {
  constructor(private enrolleeService: EnrolleeService,
    private actions$: Actions
  ) {}

  @Effect() loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.loadEmployeeListAction>(types.LOAD_EMPLOYEE_LIST),
    mergeMap(() => this.enrolleeService.getEnrollee().pipe(
      map(customers => (new employeeActions.loadEmployeeListSuccessAction(customers)))
    ))
  )

  @Effect() updateEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.updateEmployeeAction>(types.UPDATE_EMPLOYEE),
    mergeMap(action => this.enrolleeService.updateEnrolleeDetail(action.payload).pipe(
      map(customer => (new employeeActions.updateEmployeeActionSuccessAction(customer)))
    ))
  )
}
