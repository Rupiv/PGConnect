import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone : true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[RouterLink, HttpClientModule]
})
export class LoginComponent {

  constructor (private http: HttpClient, private router: Router){

  }
  
}
