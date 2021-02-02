import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerPanelService {
 
  

  private httpheader={headers: new HttpHeaders({'Content-type':'application/json'})}
  constructor(private http : HttpClient) { }

//---------------------customer-----------------------------------------------
   public fetchCustomerByUsernameAndPassword(username:String)
  {
    return this.http.get<any>("http://localhost:7070/customers/"+username);
  }

 /* updateCustomer(customer: Customer): Observable<Object> {
    return this.http.put("http://localhost:7070/customers/updateCustomer/", customer);
  }

  */
  /*updateCustomer(customerId:number,customer:Customer): Observable<Object> {
    console.log("This is customer Id"+customerId);
    return this.http.put("http://localhost:7070/admins/updateCustomer/", customer);
  }*/

  public deleteCustomerById(id: number):Observable<any>
  {
    return this.http.delete("http://localhost:7070/customers/deleteCustomer/"+ id);
  };

    ////-----------------------------------------------VEHICLE----------------------

   public deleteVehicleById(id:number) :Observable<any> {
    return this.http.delete("http://localhost:7070/customers/deleteVehicle/"+ id);
  };


}
