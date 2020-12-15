import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { from } from 'rxjs';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    DeleteAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
