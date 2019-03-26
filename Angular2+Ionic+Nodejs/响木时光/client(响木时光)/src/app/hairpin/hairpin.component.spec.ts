import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairpinComponent } from './hairpin.component';

describe('HairpinComponent', () => {
  let component: HairpinComponent;
  let fixture: ComponentFixture<HairpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
