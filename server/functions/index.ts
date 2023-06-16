const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

require('dotenv').config();

const serviceAccountKey = require('/Users/olegilcenko/Desktop/Portfolio/Portfolio-foodShop/server/functions/serviceAccountKey.json');

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

const userRoute = require('/Users/olegilcenko/Desktop/Portfolio/Portfolio-foodShop/server/functions/routes/user.ts')
app.use("/api/users", userRoute)

exports.app = functions.https.onRequest(app);
