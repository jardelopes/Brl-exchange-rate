import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-daily',
  templateUrl: './card-daily.component.html',
  styleUrls: ['./card-daily.component.css']
})
export class CardDailyComponent {

  @Input()
  t!: any[]
}
