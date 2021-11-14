import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  // constructor() {this.confirmclr=[...this.bg] }

  
  fromsource="";
  todesitnations="";
  journeyDate:any="";
  seatavailable:any;
  bookedseat:any;
  clr:boolean=false;
  visible:any;
  Payment:any;
  seatarray:any=[];
  seatlength=5;
  passDetailArray:any=[];
  Selectedseat=[];
  seat:any=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  jSeat:any=[];
  a:any;
  green:any=[];
  confirmclr:any;
  

  bg:any=[]
  bg1:any=[];


  valuepass(from:any,to:any,date:any){

    if(from==to){
      alert("source and destinations not same");
      return;
    }

    this.fromsource=from;
    this.todesitnations=to;
    this.journeyDate=date;
    this.seatavailable=30;
    this.bookedseat=0;

   
  }
  
  seatbookclr(e:any){
    if(this.seatarray.length<5){
      this.bg[e]="green";
    this.seatarray.push(e);
    this.seatavailable--;
    this.bookedseat++;

    }
    else if(this.seatarray.length>=5){
      alert("User book 5 ticket's only");
      return;
    }
    
   
    this.Payment=1500*(this.seatarray.length);


    


}
  confirmtkt(){
      if(this.seatarray=="null"||this.seatarray==""){
        alert("Please Select the Seat No");
        return
      }
      else if(localStorage.getItem(this.seatarray)){

        alert("alreday book");
        return
        

      }
      this.visible="visible";
      this.Selectedseat=(this.seatarray);
      
      
    
  }
  passDetails(passname:any,passage:any,passno:any,passdte:any,passseatno:any,passmoney:any){

    this.passDetailArray=[{
      "PassengerName":passname,
      "PassengerAge":passage,
      "PassengerMbl":passno,
      "DOJ":passdte,
      "seatNo":this.seatarray,
      "Money":passmoney
    }];

   

    localStorage.setItem(this.seatarray,JSON.stringify(this.passDetailArray));
    localStorage.setItem("availableseat",this.seatavailable);
    localStorage.setItem("bookseat",this.bookedseat);
    
     
    
  }

  ngOnInit(): void {

    this.seatavailable=localStorage.getItem("availableseat");
    console.log(this.seatavailable);
   
 
  }
 

  }


