import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailsMonthComponent } from './ranking-details-month.component';

describe('RankingDetailsMonthComponent', () => {
  let component: RankingDetailsMonthComponent;
  let fixture: ComponentFixture<RankingDetailsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDetailsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetailsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
