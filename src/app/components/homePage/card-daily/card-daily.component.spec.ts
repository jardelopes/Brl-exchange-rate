import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDailyComponent } from './card-daily.component';

describe('CardDailyComponent', () => {
  let component: CardDailyComponent;
  let fixture: ComponentFixture<CardDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
