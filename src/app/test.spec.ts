import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService, Cocktail } from './services/cocktail.service';
import { HttpClientModule } from '@angular/common/http';


describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CocktailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    const cocktails = service.getCocktails()
    expect(cocktails.length).toBeGreaterThan(0);
  });

  it('should create a CocktailListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(
    'component should have a public property named "cocktails"',
    waitForAsync(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktailsList).toBeTruthy();
      }
    )
  );
});



import { AppComponent } from './app.component';
import { NasaService } from './services/nasa.service';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('service should be created', () => {
    const service: NasaService = TestBed.inject(NasaService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getImageOfTheDay" method which returns an Observable<string> object', () => {
    const service: NasaService = TestBed.inject(NasaService);
    service.getImageOfTheDay().subscribe((param_img: any) => {
      expect(param_img).toBeTruthy();
    });
  });

  it('should create a AppComponent instance', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('component should display an image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service: NasaService = TestBed.inject(NasaService);
    const mock: Observable<any> = of({
      url: 'https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg',
    });

    spyOn(service, 'getImageOfTheDay').and.returnValue(mock);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const content = compiled.querySelector('img').src;
    expect(content).toContain(fixture.componentInstance.objectOfTheDay);
  });
});