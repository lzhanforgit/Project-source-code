import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpuserComponent } from './upuser.component';

describe('UpuserComponent', () => {
  let component: UpuserComponent;
  let fixture: ComponentFixture<UpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
