
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdK1IIGl-K3P0VP0mQ1oORsEr9vPLO_Nw",
  authDomain: "miniblog-52057.firebaseapp.com",
  projectId: "miniblog-52057",
  storageBucket: "miniblog-52057.appspot.com",
  messagingSenderId: "128103439890",
  appId: "1:128103439890:web:cd2ac86bce3fa9921802cb"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };