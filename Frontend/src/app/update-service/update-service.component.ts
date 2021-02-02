import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { ServiceType } from '../Models/service-type';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  servicetype=new ServiceType()

  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  updateService(){
    this.service.updateServiceByAdmin(this.servicetype).subscribe(
      Response=>{
        console.log("service updated successully");
        this.router.navigate(['/service-type']);
      },
      error=>{
        console.log(error);

      }

    )

  }

}
