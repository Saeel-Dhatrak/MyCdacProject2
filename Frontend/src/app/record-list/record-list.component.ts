import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../Models/record';
import { AdminPanelServiceService } from '../services/admin-panel-service.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records:Record[]
  constructor(private service:AdminPanelServiceService,private router:Router) { }

  ngOnInit(): void {

    this.service.fetchRecordList().subscribe(
      data => {
        console.log("response recieved", data);
        this.records = data;
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

  onUpdateRecord(id:number) {
    console.log("RecordId",+id);
    this.router.navigate(['update-record']);
  }

  onDeleteRecord(recordId: number) {
    var winResp =  window.confirm("Are you sure you want to delete?");
    if(winResp)
    {
      
      this.service.deleteRecordById(recordId).subscribe(
      
                                                      response=>{
                                                        console.log("response",+response);
                                                        
                                                      // window.location.reload();
                                                      //this.router.navigate(['/product-list'])
                                                      this.service.fetchRecordList();
                                                      },
                                                      error=>console.log(error)

                                                     )
      
    }
  }

}
