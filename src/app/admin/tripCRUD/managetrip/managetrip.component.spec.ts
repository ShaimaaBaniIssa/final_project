import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetripComponent } from './managetrip.component';

describe('ManagetripComponent', () => {
  let component: ManagetripComponent;
  let fixture: ComponentFixture<ManagetripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagetripComponent]
    });
    fixture = TestBed.createComponent(ManagetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
