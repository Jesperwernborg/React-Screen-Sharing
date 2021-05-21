//firebase sdk
import fb from "firebase/app";
//firebase authentication
import "firebase/auth";
//firebase database
import "firebase/firestore";

const firebase = fb;

const config = {
  apiKey: "AIzaSyCJLZu7nonvAAnxhyi9gYm1brfJHOFWyH0",
  authDomain: "testwebrtc-8b01e.firebaseapp.com",
  projectId: "testwebrtc-8b01e",
  storageBucket: "testwebrtc-8b01e.appspot.com",
  messagingSenderId: "475519716186",
  appId: "1:475519716186:web:ed0ddd0954e55ac3594163",
};

const app = fb.initializeApp(config);


export const auth = app.auth();

export const firestore = app.firestore();





export { firebase };
