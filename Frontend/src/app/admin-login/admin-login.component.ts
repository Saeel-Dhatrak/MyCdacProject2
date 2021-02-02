import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Models/admin';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin=new Admin();
  msg;

  constructor(private service : AdminServiceService ,private router : Router) { }

  ngOnInit(): void {
  }

  onAdminLogin(){
    this.service.loginAdminFromRemote(this.admin).subscribe
                                                 (
                                                    responseData=>
                                                    {
                                                      console.log("response received");
                                                      console.log("admin", responseData.name);
                                                      this.router.navigate(["/admin-panel"]);
                                                    },
                                                    error=>
                                                    {console.log("Exception");
                                                    this.msg="Bad Credentials, Please enter valid username Or password";
                                                   }                                         
                                               )
  }
}