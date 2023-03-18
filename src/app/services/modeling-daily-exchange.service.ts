import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentValue } from './../models/current-value';
import { DailyValue } from './../models/daily-value';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelingDailyExchangeService {
  dailyValue: Array<DailyValue> = []
  value1!: CurrentValue
  currentValue = new BehaviorSubject<CurrentValue>(this.value1)
  dataDailyValue!: DailyValue[]
  dataDaily = new BehaviorSubject<DailyValue[]>(this.dataDailyValue)
  constructor() { }

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
  setCurrentValue(value: CurrentValue){
    this.currentValue.next( value)
  }
  setDailyData(value: DailyValue[]){
    this.dataDaily.next(value)
  }
}
