import * as customerActions from './employee.actions';
import * as types from './action.types';
import { AppState } from '../models/app.state';

export const initialState: AppState = {
  employee: []
}

export function CustomerReducer(state = initialState, action: customerActions.Actions):AppState {
  switch(action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS: {
      return {... state, employee: action.payload };
    }
    case types.UPDATE_EMPLOYEE_SUCCESS: {
      const updatedCustomers = state.employee.map(customer => customer.id === action.payload.id ? action.payload : customer );
      return {...state, employee: updatedCustomers}
    }
    default:
      return state;
  }
}
