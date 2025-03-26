import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
  standalone:true,
  imports:[HttpClientModule]
})
export class AmenitiesComponent {

  constructor(private http:HttpClient, private router:Router){

  }


  amenitiesNext_Click(){
    this.router.navigate(['/DetailsUpload']);
  }

}
