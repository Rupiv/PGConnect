import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pgstructureinfo',
  standalone:true,
  templateUrl: './pgstructureinfo.component.html',
  styleUrls: ['./pgstructureinfo.component.css'],
  imports:[HttpClientModule]
})
export class PgstructureinfoComponent {

  constructor(private http: HttpClient, private router: Router){
    
  }

  pgStruNext_Click(){
    this.router.navigate(['/Amenities']);
  }

}
