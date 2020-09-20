import { Component, OnInit } from '@angular/core';
import { HttpService } from './../service/http.service';
@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
   
  searchKey : string = "";
  accountBalance : string = "";
  accountNo : string = "";
  errorMessage : "";

  getBalance = (args: any): void => {
    this.errorMessage = "";
    this._http.get(`accounts/${this.searchKey}`).subscribe(data => {
      this.accountBalance = data.balance;
      this.accountNo = data.accountNo;
    },
    _error => {
        if(_error.status == 404){
           this.errorMessage = _error.error.message;
        }
    })
  }

  constructor(private _http : HttpService) { }

  ngOnInit() {
  }

  onSearchKeyChanged(key : string){
    this.searchKey = key;
  }

}
