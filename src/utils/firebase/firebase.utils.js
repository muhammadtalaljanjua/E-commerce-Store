import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnXMbEWSJSgNYA6i-hljmHbpxiV6mkVQw",
  authDomain: "e-commerce-store-db-9ec16.firebaseapp.com",
  projectId: "e-commerce-store-db-9ec16",
  storageBucket: "e-commerce-store-db-9ec16.appspot.com",
  messagingSenderId: "337528924349",
  appId: "1:337528924349:web:4eb33c85fd6b5115826fd4",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
