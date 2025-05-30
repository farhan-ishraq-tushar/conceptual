import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import {onAuthStateChanged, GoogleAuthProvider,signInWithPopup,GithubAuthProvider,TwitterAuthProvider, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// Step 1: Creating Context
export const authContext = createContext();

import auth from "../../firebase/firebase.config";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const handleGoogleLogin = () =>{
      setLoading(true); // This will trigger setLoading state
        signInWithPopup(auth, googleProvider)
        // .then(result=>setUser(result.user))
    }
    const handleGithubLogin = () =>{
      setLoading(true);
        signInWithPopup(auth, githubProvider)
        // .then(result=>setUser(result.user))
    }
    const handleTwitterLogin = () =>{
      setLoading(true)
        signInWithPopup(auth, twitterProvider)
        // .then(result=>setUser(result.user))
    } 
    const handleSignUp = (email,password) =>{
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user));
    }
    const handleSignIn = (email,password) =>{
      setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user));
    }

    const handleLogout = () =>{
      setLoading(true)
        signOut(auth)
        .then(res=>console.log(res))
    }


    useEffect(()=>{
        console.log("user state: ",user)
    },[user])
  
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
          if(currentUser){
            setUser(currentUser)
          }
          else{
            setUser(null);
          }
          setLoading(false); /* if currentUser value is available this will execute.*/
           
            // if (user) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }
          });

          return ()=>{
            unsubscribe()
          } 
    },[])
      
    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        handleTwitterLogin,
        user,
        setUser,
        handleLogout,
        handleSignUp,
        handleSignIn,
        loading
    }

  return (
    <div>

      // Step 2: Wrapping components  using context provider 
      <authContext.Provider value={authData}>
      {/* <authContext.Provider value={{name: "jakariya"}}> */}
        <Navbar></Navbar>
       
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default MainLayout;
