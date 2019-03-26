import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmentComponent } from './commment.component';

describe('CommmentComponent', () => {
  let component: CommmentComponent;
  let fixture: ComponentFixture<CommmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
