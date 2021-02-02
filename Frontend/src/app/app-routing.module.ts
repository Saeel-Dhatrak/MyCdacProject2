
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { ServicingTypeComponent } from './servicing-type/servicing-type.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { VehicleListComponent }from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { FormComponent } from './form/form.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ChooseServicingTypeComponent } from './choose-servicing-type/choose-servicing-type.component';
import { RecordListComponent } from './record-list/record-list.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'customer-login',component:CustomerLoginComponent},
  {path:'staff-login',component:StaffLoginComponent},
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'customer-register',component:CustomerRegisterComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'servicing-type',component: ServicingTypeComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'staff-list',component:StaffListComponent},
  {path:'service-type',component:ServiceTypeComponent},
  {path:'staff-register',component:StaffRegisterComponent},
  {path:'vehicle-list',component:VehicleListComponent},
  {path:'update-vehicle',component:UpdateVehicleComponent},
  {path:'customer-panel',component:CustomerPanelComponent},
  {path:'update-customer',component:UpdateCustomerComponent},
  {path:'form',component:FormComponent},
  {path:'vehicle-register',component:VehicleRegisterComponent},
  {path:'staff-panel',component:StaffPanelComponent},
  {path:'update-service',component:UpdateServiceComponent},
  {path:'staff-update',component:UpdateStaffComponent},
  {path:'choose-servicing-type',component:ChooseServicingTypeComponent},
  {path:'record-list',component:RecordListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
