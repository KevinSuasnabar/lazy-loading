import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './components/register-user/register-user.component';


const routes: Routes = [
  {
    path:'services',
    loadChildren:() => import('./components/services/services.module').then(m => m.ServicesModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register-login',
    component:RegisterUserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
