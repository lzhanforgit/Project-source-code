import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefertoDoComponent } from './referto-do.component';

describe('RefertoDoComponent', () => {
  let component: RefertoDoComponent;
  let fixture: ComponentFixture<RefertoDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefertoDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefertoDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
