import { Component, OnInit } from '@angular/core';
import { Staff } from '../Models/staff';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staffs:Staff[]
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchStaffList().subscribe(
      data => {
        console.log("response recieved", data);
        this.staffs = data;
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

  addStaff(){
    console.log('taking to staff list');
    this.router.navigate(['staff-register']);
  }

  onUpdateStaff(id:number) {
    console.log("staffId",+id);
    this.router.navigate(['staff-update']);
  }

  onDeleteStaff(id: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this.service.deleteStaffById(id).subscribe(
      
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


////============================================

/*
onDeleteStaff(id: number) {
      var winResp =  window.confirm("Are you sure you want to delete?");
      if(winResp)
      {
        
        this.service.deleteStaffById(id).subscribe(
        
                                                        response=>{
                                                          console.log("response",+response);
                                                          
                                                        window.location.reload();
                                                        this.router.navigate(['staff-list'])
                                                        //this.service.fetchStaffList();
                                                        },
                                                        error=>console.log(error)
  
                                                       )
        
      }
    }*/