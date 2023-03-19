import { HelperBrlExchangeService } from 'src/app/services/helper-brl-exchange.service';
import { CurrentValue } from '../../../models/current-value';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-now',
  templateUrl: './exchange-rate-now.component.html',
  styleUrls: ['./exchange-rate-now.component.css']
})
export class ExchangeRateNowComponent implements OnInit {
  currentValue!: CurrentValue
  constructor(private helperBrlExchange: HelperBrlExchangeService){}


  ngOnInit(): void {
    this.helperBrlExchange.$currentValue.subscribe(
      res => this.currentValue = res
    )
  }

}
