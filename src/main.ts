import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { InterceptorQuete17Component } from './app/interceptor-quete17/interceptor-quete17.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
