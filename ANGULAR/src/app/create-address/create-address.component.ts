import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  address: Address = new Address();
  constructor(private AddressService: AddressService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.address);
    this.saveAddress();
  }

  saveAddress() {
    this.AddressService.createAddress(this.address).subscribe(
      data => {
        console.log(data);
        this.goToAddressList();
      },
      error => {
        console.log(error);
      });
  }

  goToAddressList(){
    this.router.navigate(['/addresses']);
  }

}
