import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseatComponent } from './createseat.component';

describe('CreateseatComponent', () => {
  let component: CreateseatComponent;
  let fixture: ComponentFixture<CreateseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateseatComponent]
    });
    fixture = TestBed.createComponent(CreateseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
