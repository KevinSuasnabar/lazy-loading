import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openForm(){
    let dialogRef=this.dialog.open(DialogComponent,{data:'Login/Register'});

    //al cerrar
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`dialog result: ${result}`);
    });
  }

}
