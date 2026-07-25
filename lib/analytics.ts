import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAih7aAwvS3eNcf2BgeYVCnPM4jHB-Df_I",
  authDomain: "streakai-3320e.firebaseapp.com",
  projectId: "streakai-3320e",
  storageBucket: "streakai-3320e.firebasestorage.app",
  messagingSenderId: "475029411175",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:475029411175:web:9d9f8f9d8f660c7ba25f6d",
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX",
};

export function initFirebaseAnalytics() {
  if (typeof window === "undefined") return null;

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    return Promise.resolve(null);
  }

  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  return isSupported().then((supported) => {
    if (!supported) return null;
    return getAnalytics(getApps()[0]);
  });
}

export async function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || measurementId === "G-XXXXXXXXXX") return;

  const supported = await isSupported();
  if (!supported) return;

  const app = getApps()[0];
  if (!app) return;

  const analytics = getAnalytics(app);
  logEvent(analytics, eventName, params);
}
