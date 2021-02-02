import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer';
import { Vehicle } from '../Models/vehicle';
import { CustomerPanelService } from '../services/customer-panel.service';



@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {

  customers:Customer;
 username:string;
  vehicle:Vehicle;


  constructor(private _service:CustomerPanelService,private _router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username");
    this._service.fetchCustomerByUsernameAndPassword(this.username).subscribe(
      data => {
        console.log("response recieved", data);
        this.customers = data;
      },
      error=>console.log("exception occured")
    )
  }

  onUpdateCustomer(id:number) {
    console.log("customerId",+id);
    this._router.navigate(['/update-customer/']);
  }

  onDeleteCustomer(customerId: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this._service.deleteCustomerById(customerId).subscribe(
      
                                                      response=>{
                                                        console.log("response",+response);
                                                        
                                                      window.location.reload();
                                                      this._router.navigate(['customer-list'])
                                                      //this.service.fetchStaffList();
                                                      },
                                                      error=>console.log(error)

                                                     )
      
    }
  }


  logout(){
    console.log('logging out');
    this._router.navigate(['customer-login']);
  }
  

/////-------------------------------------------------------------VEHICLE---------------------------------------------

onUpdateVehihcle(id:number) {
  console.log("VehicleId",+id);
  this._router.navigate(['/update-vehicle/']);
}


onDeleteVehicle(customerId: number) {
  var winResp =  window.confirm("Are you sure you want to delete?");
  if(winResp)
  {
    
    this._service.deleteVehicleById(this.vehicle.vehicleId).subscribe(
    
                                                    response=>{
                                                      console.log("response",+response);
                                                      
                                                    window.location.reload();
                                                    this._router.navigate(['customer-panel'])
                                                    //this.service.fetchStaffList();
                                                    },
                                                    error=>console.log(error)

                                                   )
    
  }
}



  staffDetails(){

    this._router.navigate(["/staff-list"]);
  }

  serviceTypeDetails()
  {
    this._router.navigate(["/service-type"]);
  }

  allVehiclesDetails(){

    this._router.navigate(["/vehicle-list"]);
  }
}
