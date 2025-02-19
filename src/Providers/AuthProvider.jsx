
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading] = useState(true);
  const [emails, setEmails] = useState([]);
 


  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const profileUp = (update) => {
   
    return updateProfile(auth.currentUser,update)
    .then(()=>{
      setLoading(true)
      setUser({...auth.currentUser,...update})
    })
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth,provider);
  }

  const signOutUser = ( ) => {
    setLoading(true);

   return signOut(auth);
  }

  useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      console.log('currently logged in',currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[])

 

const authInfo = {
  createUser,
  user,
  setUser,
  signInUser,
  signOutUser,
  loading,
  signInWithGoogle,
  profileUp,emails, setEmails,

}




  return (
   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;