import { Component } from '@angular/core';
import { RouterModule, Routes, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./PGConnect/auth/login/login.component";
import { RegisterComponent } from './PGConnect/auth/registration/register.component';
import { PginfoComponent } from './PGConnect/vendor/pginfo/pginfo.component';
import { AvailablePgOffersComponent } from "./PGConnect/vendor/available-pg-offers/available-pg-offers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, AvailablePgOffersComponent,AvailablePgOffersComponent] //LoginComponent, PginfoComponent
 //LoginComponent, PginfoComponent
})

export class AppComponent {
  title = 'PGConnet';
}