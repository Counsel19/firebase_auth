import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOafP9WJ4GatGYCUotbNg19em3HjDrIL4",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

// export const auth = app.auth();

export const auth = getAuth();

export default app;
