import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingComponent } from './uploading.component';

describe('UploadingComponent', () => {
  let component: UploadingComponent;
  let fixture: ComponentFixture<UploadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
