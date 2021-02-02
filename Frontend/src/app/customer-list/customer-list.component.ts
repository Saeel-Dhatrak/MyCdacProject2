import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Customer } from '../Models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[]
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchCustomerList().subscribe(
      data => {
        console.log("response recieved", data);
        this.customers = data;
      },
      error=>console.log("exception occured")
    )
  }

  onUpdateCustomer(id:number) {
    console.log("go to update");
    this.router.navigate(['update-customer']);
  }

  onDeleteCustomer(customerId: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this.service.deleteCustomerById(customerId).subscribe(
      
                                                      response=>{
                                                        console.log("response",+response);
                                                        
                                                      window.location.reload();
                                                      this.router.navigate(['/customer-list'])
                                                      //this.service.fetchCustomerList();
                                                      },
                                                      error=>console.log(error)

                                                     )
      
    }
  }
  
  back(){
    console.log('go back');
    this.router.navigate(['admin-panel']);
  }
  logout(){
    console.log('logging out');
    this.router.navigate(['admin-login']);
  }
}
