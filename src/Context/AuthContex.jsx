/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

 const AuthContext = createContext();

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    photo:""
  });
  
  
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      }
      else{
        setUser({
          name: "",
          email: "",
          photo:""
        })
      }
    })

    return () => {
      unsubscribe();
    }
    
  },[])

  const login = (email,password) => {
     signInWithEmailAndPassword(auth,email,password)
     .then((userCredential) => {
      const user = userCredential.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    })
    .catch((err) => {
      console.log("Error signing in with Google:", err.message);  // Log the error
    });
  }

  const createUser = (user) => {
    createUserWithEmailAndPassword(auth, user.email,user.password)
    .then(user => {
      setUser({
        name: user.name,
        email : user.email,
        photo : user.photo
      })
      updateProfile(auth.currentUser, {
        displayName : user.name,
        photoURL : user.photo
      })


    })
    .catch(err => console.log(err))
  }
  
  const logOut = () => {
     signOut(auth)
     .then(() => {
      setUser({
        name: "",
        email: "",
        photo:""
      })
     })
     .catch(err => console.log(err))
  }
  
  
  
  const googleProvider = new GoogleAuthProvider()
  
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider )
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      })
      .catch((err) => {
        console.log("Error signing in with Google:", err.message);  // Log the error
      });
  };

  const value = {
    user,
    logOut,
    login,
    signInWithGoogle,
    createUser

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {AuthContexProvider,AuthContext}