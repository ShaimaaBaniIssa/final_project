import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetripComponent } from './updatetrip.component';

describe('UpdatetripComponent', () => {
  let component: UpdatetripComponent;
  let fixture: ComponentFixture<UpdatetripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatetripComponent]
    });
    fixture = TestBed.createComponent(UpdatetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
