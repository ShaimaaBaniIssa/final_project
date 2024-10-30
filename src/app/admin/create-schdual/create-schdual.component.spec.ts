import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchdualComponent } from './create-schdual.component';

describe('CreateSchdualComponent', () => {
  let component: CreateSchdualComponent;
  let fixture: ComponentFixture<CreateSchdualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSchdualComponent]
    });
    fixture = TestBed.createComponent(CreateSchdualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
