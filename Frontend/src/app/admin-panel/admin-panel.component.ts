import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private _service:AdminServiceService,private _router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log('logging out');
    this._router.navigate(['admin-login']);
  } 

  customerDetails(){

    this._router.navigate(["/customer-list"]);
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

  allRecordsDetails(){

    this._router.navigate(["/record-list"]);
  }

}
