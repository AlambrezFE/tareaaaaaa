import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBJprIAeKee0pMHLE5t6L3D9W1Z6SdEZZQ",
  authDomain: "proyecto-react-native-lab-06.firebaseapp.com",
  projectId: "proyecto-react-native-lab-06",
  storageBucket: "proyecto-react-native-lab-06.appspot.com",
  messagingSenderId: "897849062893",
  appId: "1:897849062893:web:8c64d4df21b768df8c63e4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database }



