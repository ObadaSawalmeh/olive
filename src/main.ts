import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rules-engine',
    loadComponent: () =>
      import(
        './app/Pages/rulesEnginePage/rules-engine/rules-engine.component'
      ).then((m) => m.RulesEngineComponent),
  },
  {
    path: 'notfound',
    loadComponent: () =>
      import('./app/Pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'notfound' },
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
