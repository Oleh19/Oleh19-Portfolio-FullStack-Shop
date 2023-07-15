const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

require('dotenv').config();

const serviceAccountKey = require('../serviceAccountKey.json');

app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: true }));
app.use((req: any, res: any, next: any) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

app.get('/', (req: any, res: any) => {
  return res.send('Hello');
});

const userRoute = require('./user');
app.use('/api/users', userRoute);

const productRoute = require('./products');
app.use('/api/products/', productRoute);

exports.app = functions.https.onRequest(app);
