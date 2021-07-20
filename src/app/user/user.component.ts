import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PassengerDetailsAction } from './state';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  passenger: User;
  // successStatus = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(12)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(12)]
      ],
      address: ['', Validators.required]
    });
    this.store.select('passengerDetails').subscribe(data => {
      console.log(data.passenger);
      this.passenger = data.passenger;
      console.log(this.passenger);
      console.log('checking this.passenger');
      console.log(this.passenger ? true : false);
      if (this.passenger) {
        console.log('cam here');
        console.log(data);
        this.userForm.setValue({
          firstName: this.passenger.firstName,
          lastName: this.passenger.lastName,
          email: this.passenger.email,
          phone: this.passenger.phone,
          address: this.passenger.address
        });
      }
      else{
        this.userForm.reset();
      }
    });
  }

  get form() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    //this.successStatus = true;

    this.passenger = this.userForm.value;
    console.log(this.passenger);
    this.store.dispatch(
      PassengerDetailsAction.setPassengerDetails({ passenger: this.passenger })
    );
    this.userService.storeData(this.userForm.value);
    this.router.navigate(['/userDetails/'], { state: this.userForm.value });
  }
  reset() {
    console.log('reset()');
    this.store.dispatch(PassengerDetailsAction.resetPassengerDetails());
   /* this.store.select('reset passengerDetails').subscribe(data => {
      console.log(data);
      this.userForm.setValue({
        firstName: this.passenger.firstName,
        lastName: this.passenger.lastName,
        email: this.passenger.email,
        phone: this.passenger.phone,
        address: this.passenger.address
      });
    });*/
  }
}
