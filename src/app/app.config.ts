import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';




// Source: https://prograide.com/pregunta/35202/angular-routerlink-ne-navigue-pas-vers-le-composant-correspondant


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),HttpClientModule]
};
