import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : true,
  imports: [FormsModule, HttpClientModule, RouterLink, CommonModule]
})


export class RegisterComponent {
  postData =  {
        name : '',
        phone : '',
        email : '',
        password : '',
        referalCode : '',
        otp: ''
  }
  
  //Accesing the data from Inputs
  @ViewChild('nameInput') nameInputRef!: ElementRef;

  generatedOtp: string = '';
  enteredOtp: string[] = ['','','','','',''];
  otpError: string = '';
  phone : string = '';
  email : string = '';


  constructor(private http: HttpClient, private router: Router){

  }
  
  //#region // Commented By Rupi
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
//#endregion

  showOtpModal() {
    const modal = new bootstrap.Modal(document.getElementById('otpModal'));
    modal.show();
  }

  closeOtpModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('otpModal'));
    modal.hide();
  }

  register_Click(form: any) {

    //If User clicks on register button first the otp will genarate in backend and returns the otp to the mobile
    //after that the user will enter the otp and we are cross check the opt once and verify the user


    //Validation starts
    // if(this.postData.name == '' || this.postData.name == null){
    //   alert('Please enter full name');
    //   this.nameInputRef.nativeElement.focus();
    //   return;
    // }

    console.log('Register Click is working');

    //Api to genarate a OTP in backend 
    
    this.http.post('http://localhost:10000/api/GetOtpGen/posts.json', '')
    .subscribe(responseData => {
      var genaratedOtpRef = responseData;
    });
    
    //var phone = 
    // if (form.valid) {
    //   this.generateOtp();
    //   this.showOtpModal();
    // }
    // else{
      this.phone = this.postData.phone;
      this.email = this.postData.email;
      this.showOtpModal();
    // }
  }
  
  //#region Commented By Rupi
  //register_Click(form : NgForm) {
    //this.router.navigate(['/Pginfo']); // Change '/Register' to your actual route path

    //Model PopUp code


    //Api for saving the otp In database
    // if(generatedOtp != null || generatedOtp != ''){
    //   this.http.post('http://localhost:10000/api/Register/SaveOtp/posts.json', generatedOtp)
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
    // }
    
    //     console.log(this.postData);
    //     if (form.valid) {
    //       this.http.post('http://localhost:10000/api/Login/PostRegisterDetails/posts.json', this.postData)
    //         .subscribe(responseData => {
    //           console.log(responseData);
    //         });
    //     } else {
    //       console.log('Form is not valid');
    //     }

    //     this.router.navigate(['/PgDashboard']);
    //   }

    //#endregion
}
