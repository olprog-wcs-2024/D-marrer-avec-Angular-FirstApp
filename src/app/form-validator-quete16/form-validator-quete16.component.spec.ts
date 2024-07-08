import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorQuete16Component } from './form-validator-quete16.component';

describe('FormValidatorQuete16Component', () => {
  let component: FormValidatorQuete16Component;
  let fixture: ComponentFixture<FormValidatorQuete16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidatorQuete16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValidatorQuete16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
