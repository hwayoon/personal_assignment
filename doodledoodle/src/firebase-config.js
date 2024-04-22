import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7umtMC_yQ91C_UsR7KXqVT4vM6ak90WM",
  authDomain: "kkujeokkkujeok-gallery.firebaseapp.com",
  projectId: "kkujeokkkujeok-gallery",
  storageBucket: "kkujeokkkujeok-gallery.appspot.com",
  messagingSenderId: "216329087113",
  appId: "1:216329087113:web:7ee1245bc5f66204763e58",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, ref };
