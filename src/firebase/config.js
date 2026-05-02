import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCox19TCXI4R8si5mLPSZWW8wTdeUp0Yz8",
  authDomain: "chalk-talk-96138.firebaseapp.com",
  projectId: "chalk-talk-96138",
  storageBucket: "chalk-talk-96138.firebasestorage.app",
  messagingSenderId: "415240128939",
  appId: "1:415240128939:web:a10f0d6bed6de027636aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Enable offline persistence
try {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence enabled in first tab only');
    } else if (err.code === 'unimplemented') {
      console.warn('Browser does not support offline persistence');
    }
  });
} catch (err) {
  console.error('Error enabling persistence:', err);
}

export default app;
