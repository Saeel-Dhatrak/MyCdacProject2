import { CustomerServiceService } from './../services/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer=new Customer()
  msg=''

  constructor(private service : CustomerServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onCustomerLogin(){
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
                                               )
  }
}
