'use client';

import { initializeFirebase } from './server-init';

export * from './server-init';
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

// This file acts as a barrel file for client-side Firebase utilities.
// We re-export initializeFirebase from the server-init file,
// but because of the 'use client' directive at the top of this file,
// any component importing it from here will treat it as a client-side module.
// This allows us to share the initialization logic while respecting Next.js's boundaries.
initializeFirebase();
