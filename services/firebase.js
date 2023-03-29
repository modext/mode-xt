import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwWgLzrMOftRzOLppKy9IoGH1inhST68I',
  authDomain: 'portfolio-24beb.firebaseapp.com',
  projectId: 'portfolio-24beb',
  storageBucket: 'portfolio-24beb.appspot.com',
  messagingSenderId: '108579818747',
  appId: '1:108579818747:web:f600c2abc4198b6591f45e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
