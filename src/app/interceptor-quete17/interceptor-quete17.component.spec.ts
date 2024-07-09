import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorQuete17Component } from './interceptor-quete17.component';

describe('InterceptorQuete17Component', () => {
  let component: InterceptorQuete17Component;
  let fixture: ComponentFixture<InterceptorQuete17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorQuete17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptorQuete17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
