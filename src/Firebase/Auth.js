import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "./Firebase.config"


const login = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
  return signOut(auth)
}


const googleProvider = new GoogleAuthProvider()


const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((err) => {
      console.log("Error signing in with Google:", err.message);  // Log the error
    });
};



export {login,logOut,signInWithGoogle}