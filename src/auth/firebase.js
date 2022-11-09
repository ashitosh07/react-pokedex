import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBWt-BcrRl9X3OzjXj2TgwsaYTLs3vXeKg',
  authDomain: 'feisty-ward-315500.firebaseapp.com',
  projectId: 'feisty-ward-315500',
  storageBucket: 'feisty-ward-315500.appspot.com',
  messagingSenderId: '449643920726',
  appId: '1:449643920726:web:183e1b5178a0baf2f16af7',
  measurementId: 'G-2Y7RQWW4T8',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export { auth, db }
