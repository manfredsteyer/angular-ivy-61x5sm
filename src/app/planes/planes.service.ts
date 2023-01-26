import { inject, Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class PlanesService {
  private readonly userService = inject(UserService);

  constructor() {
    console.log(`[PlanesService]: userService: ${this.userService}`);
  }
}
