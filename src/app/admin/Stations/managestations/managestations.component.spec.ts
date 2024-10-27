import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestationsComponent } from './managestations.component';

describe('ManagestationsComponent', () => {
  let component: ManagestationsComponent;
  let fixture: ComponentFixture<ManagestationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagestationsComponent]
    });
    fixture = TestBed.createComponent(ManagestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
