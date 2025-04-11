import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = (p /*step-1: we can use "{route}" */) => {

    // keeping user date
    const [user, setUser] = useState(null); 

  // email login
  const handleResister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password);
  };

  //   google google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  const authInfo = {
    handleGoogleLogin,
    handleLogin,
    handleLogOut,
    handleResister,
  };
  // Holding stage changed value
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged()
  },[])

  return (
    <div>
      <authContext.Provider value={authInfo}>
        {
          p.route
          /*step-2: then it would be "route" */
        }
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
