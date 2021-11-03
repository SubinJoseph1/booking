import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';


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
    component:BookticketComponent
  },{
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
