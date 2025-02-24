import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient){

  }

  GetLoginDetails() {
      console.log('Form is valid. Sending request...');
      this.http.get('http://localhost:10000/api/Login/GetLoginDetails')
        .subscribe({
          next: (responseData) => {
            console.log('API response:', responseData);
          },
          error: (error) => {
            console.error('API error:', error);
          },
          complete: () => {
            console.log('API call completed');
          }
        });
    
  }  
}
