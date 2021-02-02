import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Vehicle } from '../Models/vehicle';
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles:Vehicle[]
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchVehicleList().subscribe(
      data => {
        console.log("response recieved", data);
        this.vehicles = data;
      },
      error=>console.log("exception occured")
    )
  }

  back(){
    console.log('go back');
    this.router.navigate(['admin-panel']);
  }

  logout(){
    console.log('logging out');
    this.router.navigate(['admin-login']);
  }

  onUpdateVehicle(id:number) {
    console.log("VehicleId",+id);
    this.router.navigate(['update-vehicle']);
  }



  onDeleteVehicle(vehicleId: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this.service.deleteVehicleById(vehicleId).subscribe(
      
                                                      response=>{
                                                        console.log("response",+response);
                                                        
                                                      // window.location.reload();
                                                      //this.router.navigate(['/product-list'])
                                                      this.service.fetchStaffList();
                                                      },
                                                      error=>console.log(error)

                                                     )
      
    }
  }


}
