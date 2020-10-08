
import { Action } from '@ngrx/store';
import * as types from './action.types';
import { Enrollee } from '../models/enrollee.model';

export class loadEmployeeListAction implements Action {
  readonly type = types.LOAD_EMPLOYEE_LIST;
}

export class loadEmployeeListSuccessAction implements Action {
  readonly type = types.LOAD_EMPLOYEE_LIST_SUCCESS;
  constructor(public payload: Enrollee[]) {}
}

// export class loadCustomerAction implements Action {
//   readonly type = types.LOAD_CUSTOMER;
//   constructor(public payload: Employee) {}
// }

// export class loadCustomerSuccessAction implements Action {
//   readonly type = types.LOAD_CUSTOMER_SUCCESS;

//   constructor(public payload: Employee) {}
// }

export class updateEmployeeAction implements Action {
  readonly type = types.UPDATE_EMPLOYEE;
  constructor(public payload: Enrollee) {}
}

export class updateEmployeeActionSuccessAction implements Action {
  readonly type = types.UPDATE_EMPLOYEE_SUCCESS;

  constructor(public payload: Enrollee) {}
}


export type Actions =
loadEmployeeListAction |
loadEmployeeListSuccessAction|
updateEmployeeAction |
updateEmployeeActionSuccessAction;
// |
// loadCustomerAction |
// loadCustomerSuccessAction;
