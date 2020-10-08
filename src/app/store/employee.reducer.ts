import * as customerActions from './employee.actions';
import * as types from './action.types';
import { AppState } from '../models/app.state';

export const initialState: AppState = {
  enrollee: []
}

export function CustomerReducer(state = initialState, action: customerActions.Actions):AppState {
  switch(action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS: {
      return {... state, enrollee: action.payload };
    }
    case types.UPDATE_EMPLOYEE_SUCCESS: {
      const updatedCustomers = state.enrollee.map(customer => customer.id === action.payload.id ? action.payload : customer );
      return {...state, enrollee: updatedCustomers}
    }
    default:
      return state;
  }
}
