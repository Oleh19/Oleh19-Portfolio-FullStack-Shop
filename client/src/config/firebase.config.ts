import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAkg91kWIqFh_iKUlbGCB8m-G9SJLV-XXU',
  authDomain:'foodshop-2933e.firebaseapp.com',
  projectId: 'foodshop-2933e',
  storageBucket: 'foodshop-2933e.appspot.com',
  messagingSenderId: '639680139462',
  appId:'1:639680139462:web:038e5cc819f98b417d07c7'
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
