import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenAdoptedComponent } from './kitten-adopted.component';

describe('KittenAdoptedComponent', () => {
  let component: KittenAdoptedComponent;
  let fixture: ComponentFixture<KittenAdoptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittenAdoptedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KittenAdoptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
