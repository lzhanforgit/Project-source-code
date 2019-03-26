import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailsNewcomerComponent } from './ranking-details-newcomer.component';

describe('RankingDetailsNewcomerComponent', () => {
  let component: RankingDetailsNewcomerComponent;
  let fixture: ComponentFixture<RankingDetailsNewcomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDetailsNewcomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetailsNewcomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
