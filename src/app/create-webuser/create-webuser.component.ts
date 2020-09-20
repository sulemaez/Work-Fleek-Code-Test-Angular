import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-create-webuser',
  templateUrl: './create-webuser.component.html',
  styleUrls: ['./create-webuser.component.css']
})
export class CreateWebuserComponent implements OnInit {
  
   userAdded : boolean = false;
   errorMessage : string = "";
   sendFailed : boolean = false;

   form = {
      username : "",
      password : "",
      firstName : "",
      lastName : "",
      email : "",
      customerId : "",
      employeeId : ""
   }

  constructor(private _http : HttpService) {
    
   }

  ngOnInit() {
  }

  onSubmit(){
    this.sendFailed = false;
    this.userAdded = false;
    this.errorMessage = "";
    
    this._http.post('webusers/create',this.form).subscribe(

      (data) => {
          this.userAdded = true
      },
     _error => {
          this.sendFailed = true
     });
  }

}
