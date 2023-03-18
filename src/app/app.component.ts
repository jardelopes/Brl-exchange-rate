import { CurrentValue } from './models/current-value';
import { ApiBrlExchangeService } from './services/api-brl-exchange.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModelingDailyExchangeService } from './services/modeling-daily-exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'actionLabs';
}
