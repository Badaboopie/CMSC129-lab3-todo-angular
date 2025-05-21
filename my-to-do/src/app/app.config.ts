import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyB2rUU5jH4QNp-u_aGPYdZ6Mb0V9OWNzAc",
  authDomain: "tasktrackergd.firebaseapp.com",
  projectId: "tasktrackergd",
  storageBucket: "tasktrackergd.firebasestorage.app",
  messagingSenderId: "34816558165",
  appId: "1:34816558165:web:0af80d696b2095e2aec0dc",
  measurementId: "G-Q41JES1Y4G"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
  ]
};
