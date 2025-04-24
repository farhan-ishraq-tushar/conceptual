import React, { createContext, useEffect, useState } from "react";
import {
  // getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = (p /*step-1: we can use "{route}" */) => {
  // keeping user date
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // email login and passward
  const handleResister = (email, password) => {
    // const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password).then((res) =>
      signOut(auth)
    );
  };

  const handleLogin = (email, password) => {
    // const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
  };

  //   google google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    return signInWithPopup(auth, provider);
  };

  const manageProfile = (name, image) =>{
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:image
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  const handleLogOut = () => {
    // const auth = getAuth();
    signOut(auth);
    return;
  };

  const authInfo = {
    handleGoogleLogin,
    handleLogin,
    handleLogOut,
    handleResister,
    manageProfile,
    user,
    setUser,
    loading,
    setLoading
  };
  // Holding stage changed value
  useEffect(() => {
    // const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if(currentUser){
        setUser(currentUser);
      }
      else{
        setUser(null)
      }
      setLoading(false)
      return () => {
        unSubscribe();
      };
    });
  }, []);

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
