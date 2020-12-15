import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css']
})
export class DeleteAddressComponent implements OnInit {

  id:number;
  address:Address=new Address();
  constructor(private AddressService: AddressService, private route:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.AddressService.getAddressById(this.id).subscribe(
      data=>
      {this.AddressService.deleteAddress(this.id);
        this.goToAddressList()},
      error=>{
        console.log(error)
      }
    );
  }

  goToAddressList(){
    this.router.navigate(['/addresses']);
  }
}
