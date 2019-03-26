import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunboComponent } from './lunbo.component';

describe('LunboComponent', () => {
  let component: LunboComponent;
  let fixture: ComponentFixture<LunboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
