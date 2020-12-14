import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  Addresses: Address[] = [];

  constructor(private AddressService: AddressService) { }

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

}
