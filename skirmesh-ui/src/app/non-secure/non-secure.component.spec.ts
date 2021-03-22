import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSecureComponent } from './non-secure.component';

describe('NonSecureComponent', () => {
  let component: NonSecureComponent;
  let fixture: ComponentFixture<NonSecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonSecureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
