import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fromsource="";
  todesitnations="";
  seatavailable:any;
  bookedseat:any;
  clr:any;
  visible:any;
  Payment=1500
  valuepass(from:any,to:any){

    if(from==to){
      alert("source and destinations not same");
      return;
    }

    this.fromsource=from;
    this.todesitnations=to;
    
    this.seatavailable=30;
    this.bookedseat=0;
  }
  seatbookclr(){
   
    this.clr="red";
    console.log("hi")
  }
  confirmtkt(){
      
        this.visible="visible"
      
    
  }

}
