import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// loginForm= new FormGroup({
//   email:new FormControl(
//     '',[
//       Validators.email,
//       Validators.required
//     ]
//   ),
//   password:new FormControl(
//
//     '',[
//       Validators.min(5),
//       Validators.max(5),
//       Validators.required
//     ]
//   )
// });
//
//
//   login(){
//     console.log(this.loginForm.get('email'))
//     console.log(this.loginForm.get('password'))
//
//   }

}
