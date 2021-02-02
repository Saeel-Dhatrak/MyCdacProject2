import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Staff } from '../Models/staff';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrls: ['./staff-register.component.css']
})
export class StaffRegisterComponent implements OnInit {
   check:any
  staff=new Staff();
  msg;
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
 
   onStaffRegister(){
    this.service.registerStaffFromRemote(this.staff).subscribe
                                                 (
                                                    responseData=>
                                                    {
                                                      console.log("response received");
                                                      window.alert("Registration done !!");
                                                      this.router.navigate(["staff-list"]);
                                                    },
                                                    error=>
                                                    {console.log("Exception");
                                                    this.msg="Bad Credentials, Please enter Valid Data";
                                                   }                                         
                                               )
  } 

}
