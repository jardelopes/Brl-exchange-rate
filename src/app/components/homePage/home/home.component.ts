import { HelperBrlExchangeService } from 'src/app/services/helper-brl-exchange.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private helperBrlExchange: HelperBrlExchangeService){}
  ngOnInit(): void {
    this.helperBrlExchange.resetValues()
  }

}
