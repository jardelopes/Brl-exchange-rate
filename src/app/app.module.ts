import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDailyComponent } from './components/homePage/card-daily/card-daily.component';
import { ExchangeRateNowComponent } from './components/homePage/exchange-rate-now/exchange-rate-now.component';
import { NavBarComponent } from './components/homePage/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    CardDailyComponent,
    NavBarComponent,
    ExchangeRateNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
