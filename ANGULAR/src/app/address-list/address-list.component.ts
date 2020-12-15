import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  Addresses: Address[] = [];

  constructor(private AddressService: AddressService, private router:Router) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  private getAllAddresses(){
    this.AddressService.getAllAddress().subscribe(
      (data)=>{
        console.log("data: ", data);
        this.Addresses=data;
      },
      (error : any) =>{

      }
      );
  }

  updateAddress(id:number){
    this.router.navigate(['update-address',id]);
  }

  deleteAddress(id:number){
    this.AddressService.deleteAddress(id).subscribe(
      data=>{
        console.log(data);
        this.getAllAddresses();
      }

    )
  }

}
