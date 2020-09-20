import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../service/http.service'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = sessionStorage.getItem(environment.TOKEN_KEY) != null;
  isLoginFailed : boolean = false;
  errorMessage : string = "";
  roles : string = sessionStorage.getItem("roles");
  
  form = {
     username : "",
     password : ""
  };

  constructor(private _http : HttpService,private _router : Router) {
  
  }

  ngOnInit() {}

  onSubmit() {
    this.isLoginFailed = false;
    this.errorMessage = "";
    
    this._http.login(this.form.username,this.form.password).subscribe(
      (_response: any) => {
      
          const header = _response.headers.get('Authorization');
          sessionStorage.setItem(environment.TOKEN_KEY,header);
          sessionStorage.setItem("roles","Admin")
          this._router.navigateByUrl('/customers');
      },
     _error => {
       this.isLoginFailed = true;
       console.log(_error)
     });
  }
}
