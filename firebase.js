import dotenv from "dotenv";
dotenv.config();

import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const APP = initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.ADMIN_CREDENTIAL)),
});

const AUTH = getAuth(APP);
const DB = getFirestore(APP);

export { AUTH, DB };
