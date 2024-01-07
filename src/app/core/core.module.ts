import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { routes } from '../app.routes';
import { RouterModule, provideRouter } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule, HeaderComponent, RouterModule, HttpClientModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(){
    registerLocaleData(localeFr);
  }

 }
