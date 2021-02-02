import { CustomerServiceService } from './../services/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customer=new Customer();
  msg;
  constructor(private service : CustomerServiceService ,private router : Router) { }

  ngOnInit(): void {
  }

  onCustomerRegister(){
    this.service.registerCustomerFromRemote(this.customer).subscribe
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

