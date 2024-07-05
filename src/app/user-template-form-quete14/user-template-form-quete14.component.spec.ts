import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateFormQuete14Component } from './user-template-form-quete14.component';

describe('UserTemplateFormQuete14Component', () => {
  let component: UserTemplateFormQuete14Component;
  let fixture: ComponentFixture<UserTemplateFormQuete14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTemplateFormQuete14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTemplateFormQuete14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
