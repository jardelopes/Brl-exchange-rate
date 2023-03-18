import { CurrentValue } from './models/current-value';
import { ApiBrlExchangeService } from './services/api-brl-exchange.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModelingDailyExchangeService } from './services/modeling-daily-exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'actionLabs';
  fromSymbol = new FormControl('', Validators.required)
  stringFromSymbol!: any
  teste1!: CurrentValue
  t!: any[]
  constructor(private apiBrlExchange : ApiBrlExchangeService, private teste: ModelingDailyExchangeService){}

  ngOnInit(): void {
      this.apiBrlExchange.getCurrentExchangeRate("USD").subscribe()
      this.apiBrlExchange.getDailyExchangeRate("USD").subscribe()
  }
  exchangeResult(){
    this.t = []
    this.stringFromSymbol = this.fromSymbol.value?.toString()
    this.apiBrlExchange.getCurrentExchangeRate(this.stringFromSymbol).subscribe(
      res =>{
        if(res.success)
          this.teste1 = res
      }
    )
    this.apiBrlExchange.getDailyExchangeRate(this.stringFromSymbol).subscribe(
      res =>{

        if(res.success){
          this.t = []
          this.t = res.data
          this.t = this.teste.getDailyExchangeRate((this.t.slice(0, 31)))
          console.log(this.t)
        }
      }
    )
  }

}
