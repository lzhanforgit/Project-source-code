import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSearchComponent } from './drawer-search.component';

describe('DrawerSearchComponent', () => {
  let component: DrawerSearchComponent;
  let fixture: ComponentFixture<DrawerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
