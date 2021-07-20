import { Action, createAction, createReducer, on, State } from '@ngrx/store';
import { PassengerDetailsAction } from '.';
import { User } from './user/user';

export interface PassengerState {
  passenger: User;
}
const initialState: PassengerState = {
  passenger: JSON.parse(localStorage.getItem('passenger'))
};
export const passengerDetailsReducer = createReducer(
  initialState,
  on(
    PassengerDetailsAction.setPassengerDetails,
    (state, action): PassengerState => {
      localStorage.setItem('passenger', JSON.stringify(action.passenger));
      return {
        ...state,
        passenger: action.passenger
      };
    }
  ),
  on(
    PassengerDetailsAction.resetPassengerDetails,
    (state): PassengerState => {
      localStorage.removeItem('passenger');
      return {
        ...state,
        passenger: null
      };
    }
  )
);
