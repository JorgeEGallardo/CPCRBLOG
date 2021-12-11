import {initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCVNoA5_vMnYtXLJyUqAWA7CqV7B99hl8U",
  authDomain: "reactfirebase-8bb0e.firebaseapp.com",
  projectId: "reactfirebase-8bb0e",
  storageBucket: "reactfirebase-8bb0e.appspot.com",
  messagingSenderId: "781578136428",
  appId: "1:781578136428:web:727f615c5c77b46814a149",
  measurementId: "${config.measurementId}"
};
const app = initializeApp(firebaseConfig);
export default getFirestore();