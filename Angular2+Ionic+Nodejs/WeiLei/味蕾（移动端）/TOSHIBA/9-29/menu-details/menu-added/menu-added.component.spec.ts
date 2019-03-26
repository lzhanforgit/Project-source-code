import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddedComponent } from './menu-added.component';

describe('MenuAddedComponent', () => {
  let component: MenuAddedComponent;
  let fixture: ComponentFixture<MenuAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
