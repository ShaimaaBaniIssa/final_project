import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetripComponent } from './createtrip.component';

describe('CreatetripComponent', () => {
  let component: CreatetripComponent;
  let fixture: ComponentFixture<CreatetripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatetripComponent]
    });
    fixture = TestBed.createComponent(CreatetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
