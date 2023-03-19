import { BehaviorSubject } from 'rxjs';
import { DailyValue } from '../../../models/daily-value';
import { Component, Input } from '@angular/core';
import { HelperBrlExchangeService } from 'src/app/services/helper-brl-exchange.service';

@Component({
  selector: 'app-card-daily',
  templateUrl: './card-daily.component.html',
  styleUrls: ['./card-daily.component.css']
})
export class CardDailyComponent {
  $dataDaily!: BehaviorSubject<DailyValue[]>
  constructor(private helperBrlExchange: HelperBrlExchangeService){}
  ngOnInit(): void {
    this.$dataDaily = this.helperBrlExchange.$dataDaily
  }


}
