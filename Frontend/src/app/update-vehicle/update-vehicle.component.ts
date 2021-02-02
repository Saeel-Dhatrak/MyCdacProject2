import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Vehicle } from '../Models/vehicle';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  vehicle=new Vehicle()
  constructor(private router:Router,private service:AdminPanelServiceService) { }

  ngOnInit(): void {
  }

  updateVehicle(){
    this.service.updateVehicleByAdmin(this.vehicle).subscribe(
      Response=>{
        console.log("vehicle updated successully");
        this.router.navigate(['/vehicle-list']);
      },
      error=>{
        console.log(error);

      }

    )

  }

}
