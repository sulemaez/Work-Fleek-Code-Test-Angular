import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  
  customerId : string = "";
  accountNo : string = "";
  errorMessage : string = "";
  transactions : {};

  constructor(private _http : HttpService) { }

  ngOnInit() {
  }
  
  getStatement(){
     if(this.customerId != "" && this.accountNo != ""){
      this.errorMessage = "";
      this.transactions = []
      this._http.post("transactions/mini-statement",{ customerId : this.customerId, accountNo : this.accountNo }).subscribe(data => {
           this.transactions = data;
      },
      _error => {
          this.errorMessage = "Transaction Not Found"; 
      })
     }
  }

}
