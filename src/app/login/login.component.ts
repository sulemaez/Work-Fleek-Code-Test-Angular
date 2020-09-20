import { Component, OnInit } from "@angular/core";
import {NgForm} from '@angular/forms'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  isLoginFailed : boolean = false;
  errorMessage : string = "";
  roles : string = "";
  
  form  = {
     username : "",
     password : ""
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.username);  // { first: '', last: '' }
    console.log(this.form.password);  // false
  }
}
