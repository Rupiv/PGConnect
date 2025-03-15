import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './PGConnect/auth/registration/register.component';
import  {PginfoComponent } from './PGConnect/vendor/pginfo/pginfo.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  {path: 'register-Click', component: PginfoComponent},
  { path: '**', redirectTo: 'signup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }