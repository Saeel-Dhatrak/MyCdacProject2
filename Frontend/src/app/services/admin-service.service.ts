import { Injectable } from '@angular/core';
import { Admin } from '../Models/admin';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {



  private httpheader={headers: new HttpHeaders({'Content-type':'application/json'})}
  
  constructor(private http:HttpClient) { 
   
  }

  public loginAdminFromRemote(admin :Admin):Observable<any>{
    return this.http.post<any>("http://localhost:7070/admins/login",admin);
   
  }

  public registerAdminFromRemote(admin :Admin){
    return this.http.post("http://localhost:7070/admins",admin,this.httpheader);
  }

}
