import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-photo-upload',
  templateUrl: './pg-photo-upload.component.html',
  styleUrls: ['./pg-photo-upload.component.css'],
  standalone:true,
  imports:[HttpClientModule]
})
export class PgPhotoUploadComponent {

  constructor(private http:HttpClient, private router:Router){

  }

  uploadCom_Click(){
    this.router.navigate(['/PgDashboard']);
  }

}
