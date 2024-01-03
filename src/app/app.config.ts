import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { routes } from './app.routes';


Source: https://prograide.com/pregunta/35202/angular-routerlink-ne-navigue-pas-vers-le-composant-correspondant

// Enregistrez la locale française
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: LOCALE_ID, useValue: 'fr-FR' }],
};
