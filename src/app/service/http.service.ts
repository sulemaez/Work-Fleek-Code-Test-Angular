import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  basUrl : string = "http://localhost:8595/springboot-rest-api/";
  apiV : string = "api/v2/";

  constructor(private http: HttpClient) { }

  get(url : string) {
    let header : HttpHeaders = this.getHeader(); 
    return this.http.get(`${this.basUrl}${this.apiV}${url}`,{ headers : header });
  }

  post(url: string ,data){
    let header :HttpHeaders = this.getHeader(); 
     return this.http.post(`${this.basUrl}${this.apiV}${url}`,data,{ headers : header });
  }

  put(url : string,data){
    let header : HttpHeaders = this.getHeader(); 
    return this.http.put(`${this.basUrl}${this.apiV}${url}`,data,{ headers : header });
  }
  
  login(user : string,pass : string){
  
    return this.http.post(`${this.basUrl}login`,{ username : user , password : pass },{ headers : new HttpHeaders({ 'Content-Type': 'application/json','Accept' : 'application/json', }) , observe: 'response' }  );
  }

  getHeader(){
    let auth_token  = sessionStorage.getItem(environment.TOKEN_KEY);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`,
      'Accept' : 'application/json'
    })
  } 
}
