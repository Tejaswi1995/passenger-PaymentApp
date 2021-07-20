import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { StoreModule } from '@ngrx/store';
import { UserService } from './user.service';
import { passengerDetailsReducer } from './state/passengerDetails.reducer';
import { paymentDetailsReducer } from './state/paymentDetails.reducer';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'userDetails',
    component: UserInfoComponent
  },
  {
    path: 'user-payment',
    component: UserPaymentComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('passengerDetails', passengerDetailsReducer),
    StoreModule.forFeature('paymentDetails', paymentDetailsReducer)
  ],
  declarations: [UserComponent, UserInfoComponent, UserPaymentComponent],
  providers: [UserService]
})
export class UserModule {}
