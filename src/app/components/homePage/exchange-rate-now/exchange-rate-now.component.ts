import { Observable } from 'rxjs';
import { ModelingDailyExchangeService } from 'src/app/services/modeling-daily-exchange.service';
import { CurrentValue } from './../../../models/current-value';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-now',
  templateUrl: './exchange-rate-now.component.html',
  styleUrls: ['./exchange-rate-now.component.css']
})
export class ExchangeRateNowComponent implements OnInit {
  currentValue!: CurrentValue
  constructor(private service: ModelingDailyExchangeService){}


  ngOnInit(): void {
    this.service.currentValue.subscribe(
      res => this.currentValue = res
    )
  }

}
