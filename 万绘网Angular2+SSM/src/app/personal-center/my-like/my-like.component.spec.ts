import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLikeComponent } from './my-like.component';

describe('MyLikeComponent', () => {
  let component: MyLikeComponent;
  let fixture: ComponentFixture<MyLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
