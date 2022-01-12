// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_FRONTEND_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "lof-frontend-f53c2",
  storageBucket: "lof-frontend-f53c2.appspot.com",
  messagingSenderId: "803212471836",
  appId: "1:803212471836:web:c1b07d0f684797de84f9d9",
  measurementId: "G-NGCBSVPSE8"
};

// Initialize Firebase -- connection btw Firebase and this project
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)