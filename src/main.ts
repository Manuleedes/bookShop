import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './server';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
