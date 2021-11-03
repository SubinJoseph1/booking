import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';

@Component({
  selector: 'app-bookpreparetest',
  templateUrl: './bookpreparetest.component.html',
  styleUrls: ['./bookpreparetest.component.css']
})
export class BookpreparetestComponent implements OnInit {

  constructor(private service:ServiceDemoService) { }

  ngOnInit(): void {
  }
  printbooktestprepar=this.service.bookpreparetest;
  printcol1p=this.service.bptcol1;
  printcol2p=this.service.bptcol2;
  printcol3p=this.service.bptcol3;

}
