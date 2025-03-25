import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone : true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[RouterLink]
})
export class LoginComponent {

}
