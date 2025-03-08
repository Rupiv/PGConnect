import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './PGConnect/home.component';
import { LoginComponent } from './PGConnect/auth/login/login.component';
import { RegisterComponent } from './PGConnect/auth/registration/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PginfoComponent } from './PGConnect/vendor/pginfo/pginfo.component';
import { PgstructureinfoComponent } from './PGConnect/vendor/pgstructureinfo/pgstructureinfo.component';
import { AmenitiesComponent } from './PGConnect/vendor/amenities/amenities.component';
import { PgPhotoUploadComponent } from './PGConnect/vendor/pg-photo-upload/pg-photo-upload.component';
import { PgDashboardComponent } from './PGConnect/vendor/pg-dashboard/pg-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PginfoComponent,
    PgstructureinfoComponent,
    AmenitiesComponent,
    PgPhotoUploadComponent,
    PgDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
