import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTestimonialComponent } from './approved-testimonial.component';

describe('ApprovedTestimonialComponent', () => {
  let component: ApprovedTestimonialComponent;
  let fixture: ComponentFixture<ApprovedTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedTestimonialComponent]
    });
    fixture = TestBed.createComponent(ApprovedTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
