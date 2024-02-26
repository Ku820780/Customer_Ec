
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJKaiSVoBNTZtYD9dIb2z4FuHCtaioRnI",
  authDomain: "ecommerce-ad85e.firebaseapp.com",
  projectId: "ecommerce-ad85e",
  storageBucket: "ecommerce-ad85e.appspot.com",
  messagingSenderId: "942422413874",
  appId: "1:942422413874:web:c1b7c8c8b742511490222b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(app);
// export default app;