import { createAction, props } from '@ngrx/store';
import { User } from '../user';
import { PassngerPayment } from '../user-payment/passenger-payment';

export const setPaymentDetails = createAction(
  '[User] paymentDetails',
  props<{ paymentDetails: PassngerPayment }>()
);

export const resetPaymentDetails = createAction('[User] reset paymentDetails');
