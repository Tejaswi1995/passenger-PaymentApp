import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { PaymentDetailsAction } from '../state';
import { User } from '../user';
import { PassngerPayment } from './passenger-payment';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  submitted = false;
  user: User;
  userPayment: PassngerPayment;
  successStatus: string;
  constructor(
    private fromBuider: FormBuilder,
    private router: Router,
    private store: Store<State>
  ) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  paymentForm: FormGroup;
  ngOnInit() {
    this.user = history.state;
    console.log(this.user);
    this.store.dispatch(PaymentDetailsAction.resetPaymentDetails());
    this.paymentForm = this.fromBuider.group({
      cardNo: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      expirationDate: [
        formatDate(new Date(), 'MM/yy', 'en'),
        [Validators.required]
      ],
      cva: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)]
      ]
    });
  }
  get form() {
    return this.paymentForm.controls;
  }
  onSubmit() {
    console.log(this.paymentForm.value);
    this.userPayment = this.paymentForm.value;
    this.submitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
    console.log('valid');
    console.log(this.paymentForm.value);
    this.store.dispatch(
      PaymentDetailsAction.setPaymentDetails({
        paymentDetails: this.userPayment
      })
    );
    this.successStatus = 'Thanks for payment!';
  }
}
