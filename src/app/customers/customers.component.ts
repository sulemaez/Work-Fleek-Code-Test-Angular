import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  searchKey : string = "";
  accounts : {};
  errorMessage : "";
  page : number  = 0;
  pageSize : number = 10;


  getCustomers = (args: any): void => {
    this.errorMessage = "";
    if(this.searchKey != ""){
      this._http.get(`customers/${this.searchKey}`).subscribe(data => {
        this.accounts = [data];
      },
      _error => {
          if(_error.status == 404){
             this.errorMessage = _error.error.message;
          }
      })
    }else{
       this.getAll()
    }
  }

  constructor(private _http : HttpService) { }

  ngOnInit() {
  }

  onSearchKeyChanged(key : string){
    this.searchKey = key;
  }

  getAll(){
    this._http.get(`customers/`).subscribe(data => {
      this.accounts = data;
    },
    _error => {
        if(_error.status == 404){
           this.errorMessage = _error.error.message;
        }
    })
  }

}
