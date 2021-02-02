import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';
import { Staff } from '../Models/staff';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  staff=new Staff()

  constructor(private router:Router,private service:AdminPanelServiceService) { }

  ngOnInit(): void {}


  updateStaff(){
    this.service.updateStaffByAdmin(this.staff).subscribe(
      Response=>{
        console.log("staff updated successully");
        this.router.navigate(['/staff-list']);
      },
      error=>{
        console.log(error);

      }

    )

  }
/*
  updateStaff(id: number){
    this.service.updateStaffByAdmin(id).subscribe(
      Response=>{
        console.log("staff updated successully");
        this.router.navigate(['/staff-list']);
      },
      error=>{
        console.log(error);

      }

    )

  }*/

 
  

}
