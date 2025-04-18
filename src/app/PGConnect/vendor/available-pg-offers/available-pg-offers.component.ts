import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-available-pg-offers',
  standalone: true,
  templateUrl: './available-pg-offers.component.html',
  styleUrls: ['./available-pg-offers.component.css'],
  imports:[HttpClientModule ]
})
export class AvailablePgOffersComponent {

  constructor(private http:HttpClient, private router:Router){
  
    }
}
