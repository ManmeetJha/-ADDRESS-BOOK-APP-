import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';

const routes: Routes = [
  {path:'addresses',component:AddressListComponent},
  {path:'create-address',component:CreateAddressComponent},
  {path:'',redirectTo:'addresses',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
