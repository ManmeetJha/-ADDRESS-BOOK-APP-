import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  id:number;
  address:Address=new Address();
  constructor(private AddressService: AddressService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.AddressService.getAddressById(this.id).subscribe(
      data=>
      {
        this.address=data;
        console.log("Data here is",data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  onSubmit(){
    this.AddressService.updateAddress(this.id,this.address).subscribe(
      data=>
      {this.goToAddressList()},
      error=>{
        console.log(error)
      }

    )
  }

  goToAddressList(){
    this.router.navigate(['/addresses']);
  }

}
