import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {FormsModule , ReactiveFormsModule}from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicingTypeComponent } from './servicing-type/servicing-type.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RecordComponent } from './record/record.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { FormComponent } from './form/form.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { ChooseServicingTypeComponent } from './choose-servicing-type/choose-servicing-type.component';
import { RecordListComponent } from './record-list/record-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    StaffLoginComponent,
    CustomerLoginComponent,
    AdminRegisterComponent,
    CustomerRegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicingTypeComponent,
    CustomerListComponent,
    StaffListComponent,
    VehicleListComponent,
    RecordComponent,
    ServiceTypeComponent,
    UpdateStaffComponent,
    UpdateVehicleComponent,
    CustomerPanelComponent,
    FormComponent,
    UpdateCustomerComponent,
    VehicleRegisterComponent,
    StaffPanelComponent,
    UpdateServiceComponent,
    StaffRegisterComponent,
    ChooseServicingTypeComponent,
    RecordListComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
