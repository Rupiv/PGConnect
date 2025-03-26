import { Routes } from "@angular/router";
import { RegisterComponent } from "./PGConnect/auth/registration/register.component";
import { LoginComponent } from "./PGConnect/auth/login/login.component";
import { PginfoComponent } from "./PGConnect/vendor/pginfo/pginfo.component";
import { PgstructureinfoComponent } from "./PGConnect/vendor/pgstructureinfo/pgstructureinfo.component";
import { AmenitiesComponent } from "./PGConnect/vendor/amenities/amenities.component";
import { PgPhotoUploadComponent } from "./PGConnect/vendor/pg-photo-upload/pg-photo-upload.component";
import { PgDashboardComponent } from "./PGConnect/vendor/pg-dashboard/pg-dashboard.component";

export const routes: Routes = [
    {
      path:'Login',
      component:LoginComponent
    },

    {
      path:'Register',
      component:RegisterComponent
    },

    {
      path:'Pginfo',
      component:PginfoComponent
    },

    {
      path:'PgStructureInfo',
      component:PgstructureinfoComponent
    },

    {
      path:'Amenities',
      component:AmenitiesComponent
    },

    {
      path:'DetailsUpload',
      component:PgPhotoUploadComponent
    },

    {
      path:'PgDashboard',
      component:PgDashboardComponent
    },

  ];