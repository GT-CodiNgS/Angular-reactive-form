import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { faFilm } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }

loginForm=new FormGroup({
    email:new FormControl(
      '',[
        Validators.email,
        Validators.required,
      ]),
    password:new FormControl(
      '',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
      ]),
  });



login(){
  console.log(this.loginForm.get('email'));
  console.log(this.loginForm.get('password'));
}


}


