import { inject, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { CARS_SECRET } from './cars.token';

@Injectable({ providedIn: 'root' })
//@Injectable()
export class CarsService {
  private readonly userService = inject(UserService);
  private readonly secret = inject(CARS_SECRET, { optional: true });

  constructor() {
    console.log(`[CarsService]: userService: ${this.userService}`);
    console.log(`[CarsService]: secret: ${this.secret}`);
  }
}
