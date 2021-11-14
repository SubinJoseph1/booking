import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TnserviceService } from '../tnservice.service';

@Component({
  selector: 'app-seatbookpage',
  templateUrl: './seatbookpage.component.html',
  styleUrls: ['./seatbookpage.component.css']
})
export class SeatbookpageComponent implements OnInit {
  jstart:any="";
  jend:any="";
  jdate:any="";
  seatarr:any=[];
  toggle:any;
  seatbooked:any;
  seatselectarr:any=[];
  seat:any=[];
  payment:any="";
  seatbookedno:any="";
  seatavilable:any="";
  
  visible="hidden";
  ss=[];
  passDetailArray:any=[];
  constructor(private service:TnserviceService,private router:Router) { 
    for(let seati=1;seati<=20;seati++){
      this.seatarr.push(seati);
      this.jstart=this.service.journeystart;
      this.jend=this.service.journeyend;
      this.jdate=this.service.journeydate;
      this.toggle=[false];
      this.seatbooked=[...this.toggle]
      

    }
  
    
    
  }
  selectSeat(seat:any) {
    if(this.seatbooked[seat])
    {
      alert("This seat is Booked Please select available seat");
      return;
      
    }

    this.toggle[seat] = !this.toggle[seat];
    console.log(this.toggle);
    if(this.seatselectarr.length<5){
      if(this.seatselectarr.indexOf(seat)==-1){
        this.seatselectarr.push(seat);
        this.seatbookedno++;
      }else{
        alert("already select the seat");
        return
      }
     
    }else{
      alert("user book 5 tickets only");
      return
    }
    this.payment=1500*(this.seatselectarr.length);
    console.log(this.seatselectarr);
    
    


  }
  
  confirmtkt(){
   

    if(this.seatselectarr==""){
      alert("plaese select the seat");
      return;
    }
    this.visible="visible"
    this.ss=this.seatselectarr;

  }

  passDetails(passname:any,passage:any,passno:any,passseatno:any,passmoney:any){
    this.service.pass(passname,passage,passno,passseatno,passmoney);

    if(passname=""||passage==""||passno==""){
      alert("Please fill Passenger Details");
      return;
    }
    localStorage.getItem("");
    this.seatbooked=[...this.toggle];
    localStorage.setItem("numberofseats",this.seatbooked.toString());
    

    this.passDetailArray=[{

      "PassengerName":passname,

      "PassengerAge":passage,

      "PassengerMbl":passno,

      

      "seatNo":this.seatselectarr,

      "Money":passmoney

    }];
    localStorage.setItem(this.seatselectarr,JSON.stringify(this.passDetailArray));

    
    
    this.router.navigateByUrl('showpage');

  }

  ngOnInit(): void {

    let retrived=localStorage.getItem("numberofseats");
    if(retrived)

{



this.seatbooked=[...retrived.split(",")]

console.log("before:",this.seatbooked);

}else{

return;

}

for(let i=0;i<this.seatbooked.length;i++){

if(this.seatbooked[i]=="true")

{

this.seatbooked[i]=true;

}else{

this.seatbooked[i]=false;

}

}

this.toggle=[...this.seatbooked];

console.log("after:",this.seatbooked);


}
// block(){
//   localStorage.getItem("");
//   this.seatbooked=[...this.toggle];
//   localStorage.setItem("numberofseats",this.seatbooked.toString());


// }
    

    }
  


