import { DailyValue } from './../../../models/daily-value';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiBrlExchangeService } from 'src/app/services/api-brl-exchange.service';
import { HelperBrlExchangeService} from 'src/app/services/helper-brl-exchange.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  fromSymbol = new FormControl('', [Validators.required, Validators.minLength(2)])
  stringFromSymbol!: any
  t!: any[]
  dataDaily!: DailyValue[]
  constructor(private apiBrlExchange : ApiBrlExchangeService, private helperBrlExchange: HelperBrlExchangeService){}

  ngOnInit(): void {
    console.log(this.fromSymbol)
  }
  exchangeResult(){
    this.t = []
    this.stringFromSymbol = this.fromSymbol.value?.toString().toUpperCase()
    this.apiBrlExchange.getCurrentExchangeRate(this.stringFromSymbol).subscribe(
      res=>{
        if(res.success)
          this.helperBrlExchange.setCurrentValue(res)
      }
    )

    this.apiBrlExchange.getDailyExchangeRate(this.stringFromSymbol).subscribe(
      res =>{
        if(res.success){
          this.t = []
          this.t = res.data
          this.dataDaily = this.helperBrlExchange.getDailyExchangeRate((this.t.slice(0, 31)))
          this.helperBrlExchange.setDailyData(this.dataDaily)
        }
      }
    )
  }
}
