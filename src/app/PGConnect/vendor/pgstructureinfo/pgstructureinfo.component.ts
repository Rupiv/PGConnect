import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pgstructureinfo',
  standalone:true,
  templateUrl: './pgstructureinfo.component.html',
  styleUrls: ['./pgstructureinfo.component.css'],
  imports:[HttpClientModule, FormsModule, CommonModule]
})
export class PgstructureinfoComponent {

  pgFloors: number | null = null;
  totalRooms: number | null = null;
  rooms: any[] = [];

  constructor(private http: HttpClient, private router: Router){
    
  }

  addMoreRooms_Click(){
    this.rooms.push({
      type: '',
      floor: '',
      roomNumber: ''
    });
  }

  pgStruNext_Click(){
    this.router.navigate(['/Amenities']);
  }

  pgStruBack_Click(){
    this.router.navigate(['/Pginfo']);
  }

}
