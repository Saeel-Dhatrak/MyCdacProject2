import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '.././Models/staff';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  private httpheader={headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http : HttpClient) { }

  public loginStaffFromRemote(staff :Staff):Observable<any>{
    return this.http.post<any>("http://localhost:7070/staffs/login",staff);
   
  }

  public registerStaffFromRemote(staff :Staff){
    return this.http.post("http://localhost:7070/admins/staff",staff,this.httpheader);
  
  }

  
}
