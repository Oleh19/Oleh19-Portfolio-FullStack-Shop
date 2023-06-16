import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_MESSEAGING_ID,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCCKET,
} from './constants';

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSEAGING_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyAkg91kWIqFh_iKUlbGCB8m-G9SJLV-XXU',
//   authDomain: 'foodshop-2933e.firebaseapp.com',
//   projectId: 'foodshop-2933e',
//   storageBucket: 'foodshop-2933e.appspot.com',
//   messagingSenderId: '639680139462',
//   appId: '1:639680139462:web:038e5cc819f98b417d07c7',
// };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
