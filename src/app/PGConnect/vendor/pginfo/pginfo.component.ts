import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pginfo',
  standalone : true,
  templateUrl: './pginfo.component.html',
  styleUrls: ['./pginfo.component.css'],
  imports:[HttpClientModule]
})
export class PginfoComponent {

  constructor(private http: HttpClient, private router: Router){
  
  }

  pgInFoNext_Click(){
    this.router.navigate(['/PgStructureInfo']);
  }

  pgInFoBack_Click(){
    this.router.navigate(['/Register']);
  }

}
