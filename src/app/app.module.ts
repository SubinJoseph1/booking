import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { BookpreparetestComponent } from './bookpreparetest/bookpreparetest.component';
import { SecondROwComponent } from './second-row/second-row.component';
import { ThirdRowComponent } from './third-row/third-row.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ScorestarComponent } from './scorestar/scorestar.component';
import { SocialComponent } from './social/social.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { Footer3Component } from './footer3/footer3.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { NewbookticketComponent } from './newbookticket/newbookticket.component';
import { SeatbookpageComponent } from './seatbookpage/seatbookpage.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    BookpreparetestComponent,
    SecondROwComponent,
    ThirdRowComponent,
    YoutubeComponent,
    ScorestarComponent,
    SocialComponent,
    Footer1Component,
    Footer2Component,
    Footer3Component,
    ErrorComponent,
    HomeComponent,
    BookticketComponent,
    NewbookticketComponent,
    SeatbookpageComponent,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
