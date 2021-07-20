import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {
  userData: User;
  constructor() {}

  storeData(data: User) {
    this.userData = data;
  }
}
