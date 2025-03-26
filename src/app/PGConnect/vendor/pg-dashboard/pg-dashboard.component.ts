import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-dashboard',
  templateUrl: './pg-dashboard.component.html',
  styleUrls: ['./pg-dashboard.component.css'],
  standalone:true,
  imports:[HttpClientModule]
})
export class PgDashboardComponent {


  constructor(private http:HttpClient, private router:Router){

  }


}
