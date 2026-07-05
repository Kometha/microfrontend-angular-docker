import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

// Preset Aura con color primario azul (#35A5E9) en lugar del verde esmeralda.
const NexoPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0f9fe',
      100: '#ddf0fd',
      200: '#bce4fb',
      300: '#8ad4f8',
      400: '#57bef2',
      500: '#35a5e9',
      600: '#1f88d1',
      700: '#1c6ba9',
      800: '#1c598d',
      900: '#1b4a75',
      950: '#0f2f52',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: NexoPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};
