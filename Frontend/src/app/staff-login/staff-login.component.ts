import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '.././Models/staff';
import { StaffServiceService } from './../services/staff-service.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  staff=new Staff()
  msg=''

  constructor(private service : StaffServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onStaffLogin(){
    this.service.loginStaffFromRemote(this.staff).subscribe
                                                 (
                                                    responseData=>
                                                    {
                                                      console.log("response received");
                                                      console.log("Staff", responseData);
                                                      this.staff=responseData;
                                                      console.log(this.staff.name);
                                                        localStorage.setItem("username",this.staff.username);
                                                      this.router.navigate(["staff-panel"]);
                                                    },
                                                    error=>
                                                    {console.log("Exception");
                                                    this.msg="Bad Credentials, Please enter valid username Or password";
                                                   }                                         
                                               )
  }

}


/*onCustomerLogin(){
    this.service.loginCustomerFromRemote(this.customer).subscribe
                                                 (
                                                    responseData=>
                                                    {
                                                      console.log("response received");
                                                      console.log("customer", responseData);
                                                      this.customer=responseData;
                                                      console.log(this.customer.name);
                                                        localStorage.setItem("username",this.customer.username);
                                                    // sessionStorage.setItem("")
                                                      this.router.navigate(["/customer-panel"]);
                                                    },
                                                    error=>
                                                    {console.log("Exception");
                                                    this.msg="Bad Credentials, Please enter valid username Or password";
                                                   }                                         
                                               ) */
