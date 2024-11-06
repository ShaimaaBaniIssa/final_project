import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedTestimonialComponent } from './unapproved-testimonial.component';

describe('UnapprovedTestimonialComponent', () => {
  let component: UnapprovedTestimonialComponent;
  let fixture: ComponentFixture<UnapprovedTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnapprovedTestimonialComponent]
    });
    fixture = TestBed.createComponent(UnapprovedTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
