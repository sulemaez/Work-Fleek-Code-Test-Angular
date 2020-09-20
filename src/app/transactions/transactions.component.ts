import { Component, OnInit } from "@angular/core";
import { HttpService } from '../service/http.service';

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  
  searchKey : string = "";
  transactions : {};
  errorMessage : ""

  getTransactions = (args: any): void => {
    this.errorMessage = "";
    this._http.get(`transactions/${this.searchKey}`).subscribe(data => {
      this.transactions = data;
      console.log(this.transactions)
    },
    _error => {
        if(_error.status == 404){
           this.errorMessage = _error.error.message;
        }
    })
  }

  constructor(private _http : HttpService) {
    
  }

  ngOnInit() {}

  onSearchKeyChanged(key : string){
    this.searchKey = key;
  }
}
