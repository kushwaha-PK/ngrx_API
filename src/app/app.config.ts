import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { peopleReducer } from './store/people/people.reducers';
import { PeopleEffects } from './store/people/people.effects';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
       provideRouter(routes), 
       provideHttpClient(),
       provideStore(),
       importProvidersFrom(StoreModule.forRoot({
        people: peopleReducer,
      }
    )),
    importProvidersFrom(EffectsModule.forRoot([PeopleEffects]))
  ]
};
