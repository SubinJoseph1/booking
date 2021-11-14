import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TnserviceService } from '../tnservice.service';

@Component({
  selector: 'app-newbookticket',
  templateUrl: './newbookticket.component.html',
  styleUrls: ['./newbookticket.component.css']
})
export class NewbookticketComponent implements OnInit {
  
  myDate = new Date();

  constructor(private tnservie:TnserviceService,private router:Router) { 
    
  }
  
  busDetails(s:any,d:any,jd:any){

    if(s=="" || d=="" || jd==""){
      alert("Please Enter the Journey Details");
      return
    }
    else{
      this.tnservie.bussearchDetails(s,d,jd);
      this.router.navigateByUrl('bookticket/seatbook')
    }
   
  }
 
ngOnInit(): void {
   
 
  
}
}
