import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  Arr = Array;
  temp$: any;
  RatingForm: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store<State>
  ) {
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    console.log('user-info');
    this.store.select('passengerDetails').subscribe(data => {
      
      this.user = data.passenger;
      console.log(this.user);
    });
    //this.user = this.userService.userData;

    //this.user = history.state;
  }
  getPayment() {
    this.router.navigate(['user-payment'], { state: this.user });
  }
}
