
  import { initializeApp } from "firebase/app";
  import { getAuth , GoogleAuthProvider, signInWithPopup, signOut, signInWithRedirect} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD9v-UdgV400TxqP7kIFFXkcCrV3p0fiEs",
    authDomain: "myshoppinglist-5011a.firebaseapp.com",
    projectId: "myshoppinglist-5011a",
    storageBucket: "myshoppinglist-5011a.appspot.com",
    messagingSenderId: "991662843866",
    appId: "1:991662843866:web:a2821893620da349b0c2e3",
    measurementId: "G-P17MFH09NV"
  };


  

 const app = initializeApp(firebaseConfig);
 const auth =getAuth();
 const googleProvider =new GoogleAuthProvider();
export{
    app, auth, googleProvider, signInWithPopup, signOut , GoogleAuthProvider, signInWithRedirect
}