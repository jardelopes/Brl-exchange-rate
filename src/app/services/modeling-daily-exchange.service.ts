import { DailyValue } from './../models/daily-value';
import { Injectable } from '@angular/core';
import { ApiBrlExchangeService } from './api-brl-exchange.service';

@Injectable({
  providedIn: 'root'
})
export class ModelingDailyExchangeService {
  dailyValue: Array<DailyValue> = []
  constructor(private apiBrlExchange : ApiBrlExchangeService) { }

  getDailyExchangeRate(data : any[]): Array<DailyValue>{
    this.dailyValue = []
    for (let i = 0; i < data.length-1; i++) {
      let element: DailyValue = {
        open: Number(data[i].open),
        close: Number(data[i].close),
        date: new Date(data[i].date),
        low: Number(data[i].low),
        high: Number(data[i].high),
        diff: Number(((data[i].close - data[i+1].close)/data[i].close))
      }
      console.log(element)
      if(element != undefined)
        this.dailyValue.push(element)
    }

    return this.dailyValue
  }

}
