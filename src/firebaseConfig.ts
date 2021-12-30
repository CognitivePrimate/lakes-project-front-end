import { initializeApp } from 'firebase/app';

// TEST -- google says to require the following modules within source files
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// TEST

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);