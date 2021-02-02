import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Models/admin';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Staff } from '../Models/staff';
import { Vehicle } from '../Models/vehicle';
import { ServiceType } from '../Models/service-type';


@Injectable({
  providedIn: 'root'
})
export class AdminPanelServiceService {

  //private server: string = 'http://localhost:7070/admins/allCustomers';


  private httpheader={headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http : HttpClient) { }

 

  public fetchCustomerList(): Observable<Customer[]>
{
  return this.http.get<any[]>("http://localhost:7070/admins/allCustomers");
}
public fetchVehicleList(): Observable<any[]>
{
  return this.http.get<any[]>("http://localhost:7070/admins/allVehicles");
}

public fetchStaffList(): Observable<any[]>
{
  return this.http.get<any[]>("http://localhost:7070/admins/staffs");
}

public fetchServiceTypeList(): Observable<any[]>
{
  return this.http.get<any[]>("http://localhost:7070/admins/allServicingType");
}

public deleteStaffById(id : number):Observable<any>
{
  return this.http.delete("http://localhost:7070/admins/staff/"+ id);
};

public deleteVehicleById(id: number):Observable<any>
{
  return this.http.delete("http://localhost:7070/admins/deleteVehicle/"+ id);
};

public deleteServiceTypeById(id: number):Observable<any>
{
  return this.http.delete("http://localhost:7070/admins/deleteServicingType/"+ id);
};

public deleteCustomerById(id: number):Observable<any>
{
  return this.http.delete("http://localhost:7070/admins/deleteCustomer/"+ id);
};


updateStaffByAdmin(staff: Staff): Observable<Object> {
  return this.http.put("http://localhost:7070/admins/staff/", staff);
}


updateCustomerByAdmin(customer:Customer): Observable<Object> {
  return this.http.put("http://localhost:7070/admins/updateCustomer/",customer);
}
/*
updateCustomerByAdmin(id:number): Observable<Object> {
  console.log("This is customer Id"+id);
  return this.http.put("http://localhost:7070/admins/updateCustomer/"+id);
}*/

updateVehicleByAdmin(vehicle: Vehicle): Observable<Object> {
  return this.http.put("http://localhost:7070/admins/updateVehicle/", vehicle);
}

updateServiceByAdmin(servicetype:ServiceType): Observable<Object> {
  return this.http.put("http://localhost:7070/admins/updateServicingType/", servicetype);
}
  
   public registerStaffFromRemote(staff :Staff){
    return this.http.post("http://localhost:7070/admins/staff",staff,this.httpheader);
  } 

  public registerCustomerFromRemote(customer:Customer){
    return this.http.post("http://localhost:7070/customers",customer,this.httpheader);
  }

  public fetchStaffByUsername(username:string){
    return this.http.get<any>("http://localhost:7070/staffs/"+username);
  }

  /* public fetchCustomerByUsernameAndPassword(username:String)
  {
    return this.http.get<any>("http://localhost:7070/customers/"+username);
  }*/


  public fetchRecordList(): Observable<any[]>
{
  return this.http.get<any[]>("http://localhost:7070/admins/allRecords");
}



public deleteRecordById(id: number):Observable<any>
{
  return this.http.delete("http://localhost:7070/admins/deleteRecords/"+ id);
};


}