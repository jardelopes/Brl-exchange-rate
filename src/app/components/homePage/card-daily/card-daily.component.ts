import { BehaviorSubject } from 'rxjs';
import { DailyValue } from './../../../models/daily-value';
import { Component, Input } from '@angular/core';
import { ModelingDailyExchangeService } from 'src/app/services/modeling-daily-exchange.service';

@Component({
  selector: 'app-card-daily',
  templateUrl: './card-daily.component.html',
  styleUrls: ['./card-daily.component.css']
})
export class CardDailyComponent {
  dailyValue!: any
  $dataDaily!: BehaviorSubject<DailyValue[]>
  constructor(private service: ModelingDailyExchangeService){}
  ngOnInit(): void {
    this.$dataDaily = this.service.dataDaily
  }


}
