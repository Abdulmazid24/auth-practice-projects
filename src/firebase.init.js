import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC7_heOwquKnoDXsTgEckUgTdniAXjSN0E',
  authDomain: 'auth-practice-project-9bc07.firebaseapp.com',
  projectId: 'auth-practice-project-9bc07',
  storageBucket: 'auth-practice-project-9bc07.firebasestorage.app',
  messagingSenderId: '686466909245',
  appId: '1:686466909245:web:0664869d5e2d30feb6d654',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
