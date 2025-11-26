import { firebaseConfig as hardcodedConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// This function is in its own file WITHOUT 'use client' so it can be used on the server.
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
        const envConfig = {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        };
        
        // Check if all required environment variables are present
        if (Object.values(envConfig).every(value => value)) {
            firebaseApp = initializeApp(envConfig);
        } else {
             if (process.env.NODE_ENV !== "production") {
                console.warn('Firebase environment variables not set. Falling back to hardcoded config. This is not recommended for production.');
             }
             firebaseApp = initializeApp(hardcodedConfig);
        }

    } catch (e) {
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      firebaseApp = initializeApp(hardcodedConfig);
    }
    return getSdks(firebaseApp);
  }
  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}
