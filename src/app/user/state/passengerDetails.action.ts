import { createAction, props } from '@ngrx/store';
import { User } from '../user';

export const setPassengerDetails = createAction(
  '[User] passengerDetails',
  props<{ passenger: User }>()
);

export const resetPassengerDetails = createAction(
  '[User] reset passengerDetails'
);
