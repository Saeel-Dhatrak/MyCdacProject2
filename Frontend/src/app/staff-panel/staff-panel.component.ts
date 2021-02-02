import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../Models/staff';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';

@Component({
  selector: 'app-staff-panel',
  templateUrl: './staff-panel.component.html',
  styleUrls: ['./staff-panel.component.css']
})
export class StaffPanelComponent implements OnInit {

    staff:Staff;
    username:string;

    constructor(private _service:AdminPanelServiceService,private _router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username");
    this._service.fetchStaffByUsername(this.username).subscribe(
      data => {
        console.log("response recieved", data);
        this.staff= data;
      },
      error=>console.log("exception occured")
    )

  }
  
  logout(){
    console.log('logging out');
    this._router.navigate(['staff-login']);
  }

}
