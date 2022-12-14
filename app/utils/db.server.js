import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getApps,
  initializeApp as initializeAdminApp,
  cert,
} from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

import { getFirestore } from "firebase-admin/firestore";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const config = {
  credential: cert({
    projectId: process.env["FIREBASE_ADMIN_PROJECT_ID"],
    clientEmail: process.env["FIREBASE_ADMIN_CLIENT_EMAIL"],
    privateKey: process.env["FIREBASE_ADMIN_PRIVATE_KEY"].replace(/\\n/g, "\n"),
  }),
};

if (!getApps().length) {
  initializeAdminApp(config);
}
const adminAuth = getAdminAuth();

async function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
async function getSessionToken(idToken) {
  const decodedToken = await getAdminAuth().verifyIdToken(idToken);
  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }
  const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  return getAdminAuth().createSessionCookie(idToken, { expiresIn: twoWeeks });
}
async function logOutFirebase() {
  await signOut(auth);
}

const db = getFirestore();
export {
  db,
  auth,
  adminAuth,
  signUp,
  signIn,
  getSessionToken,
  getAdminAuth,
  logOutFirebase,
};
