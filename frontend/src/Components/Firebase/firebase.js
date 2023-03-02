import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJtdprqu_MBrds3-PqJfL0YKSJmmB-tuo",
    authDomain: "slack-clone-e7a50.firebaseapp.com",
    projectId: "slack-clone-e7a50",
    storageBucket: "slack-clone-e7a50.appspot.com",
    messagingSenderId: "703996957981",
    appId: "1:703996957981:web:e866ca5b6b06fc42067df4",
    measurementId: "G-KF5QYNVS2C"
  };

  const firebaseApp =initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export default db;