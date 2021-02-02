import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Models/admin';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  admin=new Admin();
  msg;
  constructor(private service : AdminServiceService ,private router : Router) { }

  ngOnInit(): void {
  }

  onAdminRegister(){
    this.service.registerAdminFromRemote(this.admin).subscribe
                                                 (
                                                    responseData=>
                                                    {
                                                      console.log("response received");
                                                      window.alert("Registration done !!");
                                                      this.router.navigate([""]);
                                                    },
                                                    error=>
                                                    {console.log("Exception");
                                                    this.msg="Bad Credentials, Please enter Valid Data";
                                                   }                                         
                                               )
  }
}
