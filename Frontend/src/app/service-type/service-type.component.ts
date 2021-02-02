import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { ServiceType } from '../Models/service-type';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {

  servicetypes:ServiceType[]
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchServiceTypeList().subscribe(
      data => {
        console.log("response recieved", data);
        this.servicetypes = data;
      },
      error=>console.log("exception occured")
    )
  }

  onUpdateServiceType(id:number) {
    console.log("serviceId",+id);
    this.router.navigate(['update-service']);
  }

  onDeleteServiceType(serviceId: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this.service.deleteServiceTypeById(serviceId).subscribe(
      
                                                      response=>{
                                                        console.log("response",+response);
                                                        
                                                      window.location.reload();
                                                      this.router.navigate(['service-type'])
                                                      //this.service.fetchVehicleList();
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
