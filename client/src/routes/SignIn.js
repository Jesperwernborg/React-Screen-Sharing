import React from "react";
import firebase from "firebase/app"
import { auth, firestore } from "../firebase";

const SignIn = () => {
  const signInWithProvider = async (provider) => {

     const {additionalUserInfo, user} = await auth.signInWithPopup(provider);
     
      if(additionalUserInfo.isNewUser) {
        firestore.collection('users').doc(user.uid).set({uid: user.uid})
      }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  /* function signOut() {
        return auth.currentUser && (
            <button onClick={() => auth.signOut()}>Sign Out</button>
        )
    } */

  return (
    <div className="Login-Container">
      <h2>Login</h2>
      <button onClick={onGoogleSignIn} className="loginBtn">
        Login with google
      </button>
    </div>
  );
};

export default SignIn;
