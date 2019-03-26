import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReleaseComponent } from './my-release.component';

describe('MyReleaseComponent', () => {
  let component: MyReleaseComponent;
  let fixture: ComponentFixture<MyReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
