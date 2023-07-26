import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN,REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCCKET, REACT_APP_FIREBASE_MESSEAGING_ID, REACT_APP_FIREBASE_APP_ID } from './constants';

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain:REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSEAGING_ID,
  appId:REACT_APP_FIREBASE_APP_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
