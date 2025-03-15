import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PGConnet';

  isSignupPage: boolean = false;
  isRegisterPage: boolean = false;
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isSignupPage = this.router.url === '/signup';
      this.isRegisterPage = this.router.url === '/register-Click';
      this.isLoginPage = this.router.url === '/login';
    });
  }
}