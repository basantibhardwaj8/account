import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4Ube_K1e7uNRUKkqo4QmdnF417Yyl7uE",
    authDomain: "account-management-6fbc5.firebaseapp.com",
    projectId: "account-management-6fbc5",
    storageBucket: "account-management-6fbc5.appspot.com",
    messagingSenderId: "349252869695",
    appId: "1:349252869695:web:df2b3c5d97148b9ec6e28a",
    measurementId: "G-6CQJ6KXKR1"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);