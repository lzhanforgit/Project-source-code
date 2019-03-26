import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailsWeekComponent } from './ranking-details-week.component';

describe('RankingDetailsWeekComponent', () => {
  let component: RankingDetailsWeekComponent;
  let fixture: ComponentFixture<RankingDetailsWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDetailsWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetailsWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
