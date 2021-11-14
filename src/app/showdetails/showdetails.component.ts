import { Component, OnInit } from '@angular/core';
import { TnserviceService } from '../tnservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  passname="";
  passage="";
  passno="";
  passseat="";
  passpayment=""
  constructor(private service:TnserviceService) {

    this.passname=this.service.passengerName;
    this.passage=this.service.PassengerAge;
    this.passno=this.service.PassengerMobile;
    this.passseat=this.service.Passenegerseatno;
    this.passpayment=this.service.Payment;
   }

  ngOnInit(): void {


  }

}
