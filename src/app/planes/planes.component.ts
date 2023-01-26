import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PlanesService } from './planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css'],
  standalone: true,
})
export class PlanesComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly planesService = inject(PlanesService);

  ngOnInit() {
    console.log(`[PlanesComponent]: userService: ${this.userService}`);
  }
}
