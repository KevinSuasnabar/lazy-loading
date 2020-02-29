import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef=this.dialog.open(DialogComponent,{data:'Login/Register'});

    //al cerrar
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`dialog result: ${result}`);
    });
  }

}
