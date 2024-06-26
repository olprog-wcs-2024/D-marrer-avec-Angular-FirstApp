import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedKittenListComponent } from './kitten-adopted.component';

describe('KittenAdoptedComponent', () => {
  let component: AdoptedKittenListComponent;
  let fixture: ComponentFixture<AdoptedKittenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptedKittenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptedKittenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
