import {initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVmodydqJQvNsKvzeH_jutNXe-XNZtIoQ",
  authDomain: "cpcrapi.firebaseapp.com",
  projectId: "cpcrapi",
  storageBucket: "cpcrapi.appspot.com",
  messagingSenderId: "334384136541",
  appId: "1:334384136541:web:e6cd489038845b7d5628b4",
  measurementId: "G-SBV9SHFMNP"
};
const app = initializeApp(firebaseConfig);
export default getFirestore();