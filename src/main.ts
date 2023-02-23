import { provideImgixLoader } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideImgixLoader('https://best-places.imgix.net')],
}).catch((err) => console.error(err));
