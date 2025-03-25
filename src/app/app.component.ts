import { Component } from '@angular/core';
import { RouterModule, Routes, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./PGConnect/auth/login/login.component";
import { RegisterComponent } from './PGConnect/auth/registration/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LoginComponent],

})

export class AppComponent {
  title = 'PGConnet';
}