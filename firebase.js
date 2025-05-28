// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore, setLogLevel } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9rj_FtGGGe_e7oO4JVLhf6XrFZhy0KXQ",
  authDomain: "dijitalpazarlama-17b71.firebaseapp.com",
  projectId: "dijitalpazarlama-17b71",
  storageBucket: "dijitalpazarlama-17b71.appspot.com",
  messagingSenderId: "101106004990",
  appId: "1:101106004990:web:51b5f3548a5a98424c86af",
  measurementId: "G-ZBP9N0221L"
};

// Uygulama başlat (birden fazla kez başlatmayı engelle)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Auth başlat
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app);
}

// Firestore başlat
const db = getFirestore(app);

// Firestore log seviyesini uyarıları gizleyecek şekilde ayarla
setLogLevel('error');

export { auth, db };
