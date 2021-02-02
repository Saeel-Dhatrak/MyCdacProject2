import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerServiceService {

  private httpheader={headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http : HttpClient) { }

  public loginCustomerFromRemote(customer :Customer):Observable<any>{
    return this.http.post<any>("http://localhost:7070/customers/login",customer);
   
  }

  public registerCustomerFromRemote(customer :Customer){
    return this.http.post("http://localhost:7070/customers/",customer,this.httpheader);
  }


  //----------------------------------------------------------------------- 




}