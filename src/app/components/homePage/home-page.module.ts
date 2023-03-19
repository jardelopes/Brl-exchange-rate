import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDailyComponent } from './card-daily/card-daily.component';
import { ExchangeRateNowComponent } from './exchange-rate-now/exchange-rate-now.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardDailyComponent,
    ExchangeRateNowComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule { }
