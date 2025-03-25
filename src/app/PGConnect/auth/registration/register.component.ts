import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : true,
  imports: [FormsModule, HttpClientModule]
})


export class RegisterComponent {
  postData ={
        name : '',
        email : '',
        password : '',
        referalCode : '',
         otp: ''
      }

  constructor(private http: HttpClient, private router: Router){

  }
  

  togglePassword(fieldId: string) {
    const input = document.getElementById(fieldId) as HTMLInputElement;
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }
  // onRegisterClick(
  //   postData:{
  //     name : String; 
  //     email : String; 
  //     password : String;
  //     referalCode : String;
  //   }){
  //     this.http.post(
  //       'https://localhost:5001/api/Login/GetLoginDetails/posts.json', 
  //       postData
  //     ).subscribe(responseData => {
  //       console.log(responseData);
  //     });      
  // }

  // onRegisterClick(form: NgForm) {
  //   console.log(this.postData);
  //   if (form.valid) {
  //     this.http.post('http://localhost:10000/api/Login/PostLoginDetails/posts.json', this.postData)
  //       .subscribe(responseData => {
  //         console.log(responseData);
  //       });
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }

  register_Click(){
    this.router.navigate(['/register-Click']);
  }

}
