import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveFormQuete15Component } from './user-reactive-form-quete15.component';

describe('UserReactiveFormQuete15Component', () => {
  let component: UserReactiveFormQuete15Component;
  let fixture: ComponentFixture<UserReactiveFormQuete15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactiveFormQuete15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserReactiveFormQuete15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
