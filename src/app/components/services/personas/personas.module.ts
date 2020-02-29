import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from '../services.component';
import { HormigasComponent } from './hormigas/hormigas.component';
import { PersonasComponent } from './personas.component';
import { ContactoComponent } from './contacto/contacto.component';

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
    HormigasComponent,
    ContactoComponent
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class PersonasModule { }
