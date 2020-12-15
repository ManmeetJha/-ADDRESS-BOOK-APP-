import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = [
  {path:'addresses',component:AddressListComponent},
  {path:'create-address',component:CreateAddressComponent},
  {path:'',redirectTo:'addresses',pathMatch:'full'},
  {path: 'update-address/:id',component:UpdateAddressComponent},
  {path:'delete-address/:id',component:DeleteAddressComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
