import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from '../services.component';
import { HormigasComponent } from './hormigas/hormigas.component';
import { PersonasComponent } from './personas.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path:'',
        component:PersonasComponent
      },
      {
        path:'hormigas',
        component:HormigasComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    PersonasComponent,
    HormigasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonasModule { }
