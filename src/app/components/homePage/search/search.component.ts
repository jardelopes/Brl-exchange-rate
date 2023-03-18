import { DailyValue } from './../../../models/daily-value';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CurrentValue } from 'src/app/models/current-value';
import { ApiBrlExchangeService } from 'src/app/services/api-brl-exchange.service';
import { ModelingDailyExchangeService } from 'src/app/services/modeling-daily-exchange.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  fromSymbol = new FormControl('', Validators.required)
  stringFromSymbol!: any
  teste1!: CurrentValue
  t!: any[]
  dataDaily!: DailyValue[]
  constructor(private apiBrlExchange : ApiBrlExchangeService, private teste: ModelingDailyExchangeService){}

  ngOnInit(): void {
  }
  exchangeResult(){
    this.t = []
    this.stringFromSymbol = this.fromSymbol.value?.toString()
    this.apiBrlExchange.getCurrentExchangeRate(this.stringFromSymbol).subscribe(
      res=>{
        this.teste.setCurrentValue(res)
      }
    )

    this.apiBrlExchange.getDailyExchangeRate(this.stringFromSymbol).subscribe(
      res =>{
        if(res.success){
          this.t = []
          this.t = res.data
          this.dataDaily = this.teste.getDailyExchangeRate((this.t.slice(0, 31)))
          this.teste.setDailyData(this.dataDaily)
        }
      }
    )
  }
}
