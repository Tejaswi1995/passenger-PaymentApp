import { createReducer, on } from '@ngrx/store';
import { PaymentDetailsAction } from '.';
import { PassngerPayment } from '../user-payment/passenger-payment';
export interface paymentState {
  paymentDetails: PassngerPayment;
}
const initialState: paymentState = {
  paymentDetails: null
};
export const paymentDetailsReducer = createReducer(
  initialState,
  on(
    PaymentDetailsAction.setPaymentDetails,
    (state, action): paymentState => {
      console.log(state);
      console.log(action);
      return {
        ...state,
        paymentDetails: action.paymentDetails
      };
    }
  ),
  on(
    PaymentDetailsAction.resetPaymentDetails,
    (state): paymentState => {
      return {
        ...state,
        paymentDetails: null
      };
    }
  )
);
