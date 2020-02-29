import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from './services.component';
import { PersonasComponent } from './personas/personas.component';

const routes:Routes=[
  {
    path: '',
    children: [
      {
        path: 'personas',
        loadChildren:() => import('./personas/personas.module').then(m => m.PersonasModule)
      },
      {
        path: '',
        component: ServicesComponent
      }
      
    ]
  }
]
  

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
