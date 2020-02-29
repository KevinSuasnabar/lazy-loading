import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @Input() titulo:string;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginSubmit(loginForm){
    if(loginForm.valid){
      console.log(loginForm.value);
      //podemos enviar al servicio
      //this.service.envierDAtos(loginForm).subscribe(
      //  response=>console.log(response)
       // )
    }
  }

  onRegisterSubmit(registerForm){
    if(registerForm.valid){
      console.log(registerForm.value);
      //podemos enviar al servicio
    }
  }
}
