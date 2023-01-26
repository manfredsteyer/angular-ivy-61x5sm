import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import { CARS_SECRET } from './cars/cars.token';
import { CarsService } from './cars/cars.service';

const routes: Routes = [
  {
    path: 'cars',
    //providers: [{ provide: CARS_SECRET, useValue: 'xyz' }, CarsService],
    loadComponent: () =>
      import('./cars/cars.component').then(
        ({ CarsComponent }) => CarsComponent
      ),
  },
  {
    path: 'planes',
    loadComponent: () =>
      import('./planes/planes.component').then(
        ({ PlanesComponent }) => PlanesComponent
      ),
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
