import { ServiceType } from './../Models/service-type';
import { Vehicle } from './../Models/vehicle';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer';
import { Record } from '../Models/record';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    customer:Customer
    vehicle:Vehicle
    servicetype:ServiceType
    record:Record
  constructor(private _router:Router) { }

    msg
  ngOnInit(): void {
  }

  onSubmit(){
    var winResp =  window.confirm("Your Booking is Confirm");
    if(winResp)
    {
      
      
                this._router.navigate([''])
                                                    
      
    }
  }

}
