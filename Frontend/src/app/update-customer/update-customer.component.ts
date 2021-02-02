import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Customer } from '../Models/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer=new Customer()

  constructor(private service:AdminPanelServiceService,private router:Router) {
   }

  ngOnInit(): void {
   
  }

  updateCustomer(){
    this.service.updateCustomerByAdmin(this.customer).subscribe(
      Response=>{
        console.log("customer updated successully");
        this.router.navigate(['/customer-list']);
      },
      error=>{
        console.log(error);

      }

    )

  }

/*
  updateCustomer(id:number){
    console.log(id);
    this.service.updateCustomerByAdmin(id,this.customer).subscribe(
      Response=>{
        console.log("customer updated successully");
        this.router.navigate(['/customer-list']);
      },
      error=>{
        console.log(error);

      }

    )

  }*/

}
