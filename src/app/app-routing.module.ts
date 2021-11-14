import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NewbookticketComponent } from './newbookticket/newbookticket.component';
import { SeatbookpageComponent } from './seatbookpage/seatbookpage.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,

  }
  ,{
    path:"home",
    component:HomeComponent
  },{
    path:'bookticket',
    component:NewbookticketComponent
  },{
    path:'bookticket',
    children:[{
      path:'seatbook',
      component:SeatbookpageComponent
    }]
      
  },{
    path:'showpage',
    component:ShowdetailsComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
