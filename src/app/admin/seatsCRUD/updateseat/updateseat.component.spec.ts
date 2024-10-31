import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateseatComponent } from './updateseat.component';

describe('UpdateseatComponent', () => {
  let component: UpdateseatComponent;
  let fixture: ComponentFixture<UpdateseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateseatComponent]
    });
    fixture = TestBed.createComponent(UpdateseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
