import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuspageComponent } from './aboutuspage.component';

describe('AboutuspageComponent', () => {
  let component: AboutuspageComponent;
  let fixture: ComponentFixture<AboutuspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutuspageComponent]
    });
    fixture = TestBed.createComponent(AboutuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
