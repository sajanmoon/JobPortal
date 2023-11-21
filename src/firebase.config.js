// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzvlI_W4avYjt4z4CchH9QyWBdS65N-Cg",
  authDomain: "online-job-portal-10c41.firebaseapp.com",
  projectId: "online-job-portal-10c41",
  storageBucket: "online-job-portal-10c41.appspot.com",
  messagingSenderId: "275164264819",
  appId: "1:275164264819:web:a45863714912c54a092d06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}