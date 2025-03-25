import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './PGConnect/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PginfoComponent } from './PGConnect/vendor/pginfo/pginfo.component';
import { PgstructureinfoComponent } from './PGConnect/vendor/pgstructureinfo/pgstructureinfo.component';
import { AmenitiesComponent } from './PGConnect/vendor/amenities/amenities.component';
import { PgPhotoUploadComponent } from './PGConnect/vendor/pg-photo-upload/pg-photo-upload.component';
import { PgDashboardComponent } from './PGConnect/vendor/pg-dashboard/pg-dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    PginfoComponent,
    PgstructureinfoComponent,
    AmenitiesComponent,
    PgPhotoUploadComponent,
    PgDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
